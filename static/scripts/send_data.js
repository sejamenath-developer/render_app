function sendMessage() {
    var userInput = $('#textInput').val();
    var result = document.getElementById('results');
    var formData = new FormData();
    var progressBar = document.getElementById('progressBar');
    var progressBarValue = 0;

    formData.append('message', userInput);

    // Show the progress bar
    progressBar.style.display = 'block';

    var interval = setInterval(function() {
        progressBarValue += 5; // Update the progress bar value (adjust as needed)
        progressBar.style.width = progressBarValue + '%'; // Update the progress bar width

        if (progressBarValue >= 100) {
            clearInterval(interval);
            progressBar.style.display = 'none'; // Hide the progress bar on completion
        }
    }, 500); // Adjust the interval duration as needed

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
        },
        error: function(error) {
            console.error('Error:', error);
            // Handle error
        }
    });
}
