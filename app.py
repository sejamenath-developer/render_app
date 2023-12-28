from flask import Flask, render_template, request, jsonify
from pathlib import Path
from google.cloud import translate_v2 as translate
import google.generativeai as genai
import mimetypes

# Initialize Flask app, Google Generative AI, and Google Translation API
app = Flask(__name__)
genai.configure(api_key="AIzaSyAgYD9komBIepaqDvKT3FJSVbynsc9WVkg")
translator = translate.Client()

# ... (Rest of your existing code remains the same)

@app.route('/submit', methods=['POST'])
def submit():
    user_message = request.form.get('message')
    print('Received message from frontend:', user_message)

    # Translate the user message from Sinhala to English
    translated_message = translator.translate(user_message, source_language='si', target_language='en')['translatedText']
    
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
        translated_message,  # Use the translated message here
        image_parts[0],
        "",
    ]

    response = model.generate_content(prompt_parts)

    # Translate the generated response from English back to Sinhala
    translated_response = translator.translate(response.text, source_language='en', target_language='si')['translatedText']
    
    print(translated_response)
    return jsonify(data=translated_response)  # Return the translated response

if __name__ == '__main__':
    app.run()
