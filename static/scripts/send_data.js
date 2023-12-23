function sendMessage() {
    var userInput = $('#textInput').val();
    var result = document.getElementById('results');
    var formData = new FormData();

    formData.append('message', userInput);

    $.ajax({
        url: '/submit',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {
            result.innerHTML = '<img src="static/icons/Chatbot.png" alt="Image Preview" class="result-image" style="width:40px"><br>' + data.data;
            showSuccessMessage();
            
            // Clear the placeholder text after sending the message
            $('#textInput').val('');

            // Additional logic for handling the Python code response if needed
            // You can access the Python response in the 'data' variable
            // Example: console.log('Python Response:', data);

        },
        error: function(error) {
            console.error('Error:', error);
            // Handle error
        }
    });
}
