from flask import Flask, render_template, request, jsonify
from pathlib import Path
from googletrans import Translator  # Import the Translator from googletrans library
import google.generativeai as genai
import mimetypes

file_path = ''

app = Flask(__name__)

# Configure Google Generative AI
genai.configure(api_key="AIzaSyAgYD9komBIepaqDvKT3FJSVbynsc9WVkg")

# Set up the model, safety settings, etc. (your existing code)

translator = Translator()

@app.route('/')
def index():
    return render_template('interface.html')

# ... (your existing code for file upload and submission)

@app.route('/submit', methods=['POST'])
def submit():
    user_message = request.form.get('message')
    print('Received message from frontend:', user_message)

    if not file_path.exists():
        return jsonify({"error": "Could not find the uploaded image"})

    mime_type, _ = mimetypes.guess_type(file_path)

    image_parts = [
        {
            "mime_type": mime_type,
            "data": file_path.read_bytes()
        },
    ]

    # Translate input message from Sinhala to English
    translated_message = translator.translate(user_message, src='si', dest='en').text

    prompt_parts = [
        translated_message,  # Use the translated message
        image_parts[0],
        "",
    ]

    response = model.generate_content(prompt_parts)

    # Translate the generated response from English back to Sinhala
    translated_response = translator.translate(response.text, src='en', dest='si').text

    print(translated_response)
    return jsonify(data=translated_response)

if __name__ == '__main__':
    app.run()
