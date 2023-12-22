from flask import Flask, render_template, request, jsonify
from pathlib import Path
import google.generativeai as genai
import mimetypes  # Import the mimetypes module

file_path = ''

app = Flask(__name__)

# Configure Google Generative AI
genai.configure(api_key="AIzaSyAZZImzWodLf_m8J-EVJLG_nWjBoSyBI6k")

# Set up the model
generation_config = {
    "temperature": 0.4,
    "top_p": 1,
    "top_k": 32,
    "max_output_tokens": 4096,
}

safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    }
]

model = genai.GenerativeModel(model_name="gemini-pro-vision",
                              generation_config=generation_config,
                              safety_settings=safety_settings)

@app.route('/')
def index():
    return render_template('interface.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"})
    
    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"})

    # Save the uploaded file
    upload_folder = Path("uploads")
    upload_folder.mkdir(exist_ok=True)
    global file_path
    file_path = upload_folder / file.filename
    file.save(file_path)
    return jsonify({"success": "File uploaded successfully"})

@app.route('/submit', methods=['POST'])
def submit():
    user_message = request.form.get('message')
    print('Received message from frontend:', user_message)

    if not file_path.exists():
        return jsonify({"error": "Could not find the uploaded image"})

    # Determine the MIME type using the mimetypes module
    mime_type, _ = mimetypes.guess_type(file_path)
    
    image_parts = [
        {
            "mime_type": mime_type,
            "data": file_path.read_bytes()
        },
    ]

    prompt_parts = [
        user_message,
        image_parts[0],
        "",
    ]

    response = model.generate_content(prompt_parts)

    print(response.text)
    return jsonify(data=response.text)

if __name__ == '__main__':
    app.run()
