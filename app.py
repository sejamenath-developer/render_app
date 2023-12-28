from flask import Flask, render_template, request, jsonify
from pathlib import Path
from googletrans import Translator
import google.generativeai as genai
import mimetypes

app = Flask(__name__)
translator = Translator()

# Configure Google Generative AI
genai.configure(api_key="AIzaSyAgYD9komBIepaqDvKT3FJSVbynsc9WVkg")

# ... (Rest of your model setup code remains the same)

@app.route('/')
def index():
    return render_template('interface.html')

@app.route('/upload', methods=['POST'])
def upload():
    # ... (Your existing upload function remains the same)

@app.route('/submit', methods=['POST'])
def submit():
    user_message = request.form.get('message')
    print('Received message from frontend:', user_message)

    # Translate the user's message into English
    translated_message = translator.translate(user_message, dest='en').text
    print('Translated message:', translated_message)

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

    # Use the translated message in your prompt_parts
    prompt_parts = [
        translated_message,
        image_parts[0],
        "",
    ]

    response = model.generate_content(prompt_parts)

    print(response.text)
    return jsonify(data=response.text)

if __name__ == '__main__':
    app.run()
