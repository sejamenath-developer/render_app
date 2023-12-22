from flask import Flask, render_template, request, jsonify
from pathlib import Path
from google.cloud import translate
import google.generativeai as genai
import mimetypes
import os

file_path = ''

app = Flask(__name__)

# Configure Google Generative AI
genai.configure(api_key="AIzaSyAgYD9komBIepaqDvKT3FJSVbynsc9WVkg")  # Replace with your actual API key

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

# Set up Google Cloud Translation client
translate_client = translate.TranslationServiceClient()

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

    # Translate the user message to the language you desire (e.g., 'si' for Sinhala)
    translated_message = translate_text(user_message, 'si')
    print('Translated message:', translated_message)

    if not Path(file_path).exists():
        return jsonify({"error": "Could not find the uploaded image"})

    mime_type, _ = mimetypes.guess_type(file_path)
    
    image_parts = [
        {
            "mime_type": mime_type,
            "data": Path(file_path).read_bytes()
        },
    ]

    prompt_parts = [
        translated_message,
        image_parts[0],
        "",
    ]

    response = model.generate_content(prompt_parts)

    print(response.text)

    # Remove uploaded file
    if os.path.exists(file_path):
        os.remove(file_path)

    return jsonify(data=response.text)

def translate_text(text, target_language):
    parent = "projects/your-project-id/locations/global"  # Replace with your actual GCP project ID
    response = translate_client.translate_text(
        contents=[text],
        target_language_code=target_language,
        parent=parent
    )
    translated_text = response.translations[0].translated_text
    return translated_text

if __name__ == '__main__':
    app.run()
