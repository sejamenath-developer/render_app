function sendMessage() {
    var userInput = $('#textInput').val();
    var result = document.getElementById('results');
    var formData = new FormData();

    // Your translation API call would go here
    // For example, using Google Translate API
    var translatedMessage = translateToSinhala(userInput); // This function needs implementation

    formData.append('message', translatedMessage);

    $.ajax({
        url: '/submit',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {
            result.innerHTML = '<img src="static/icons/tmp-camera-1703274705850.png" alt="Image Preview" class="result-image" style="width:40px"><p> Resalt</p><br><br>' + data.data;
            showSuccessMessage();
            
            // Clear the placeholder text after sending the message
            $('#textInput').val('');
        },
        error: function(error) {
            console.error('Error:', error);
            // Handle error
        }
    });
}
