function sendMessage() {
    var userInput = $('#textInput').val();
    var result = document.getElementById('results');
    var formData = new FormData();
    var progressBar = document.getElementById('progressBar');
    var progressBarValue = 0;

    formData.append('message', userInput);

    // Show the progress bar
    progressBar.style.display = 'block';

    // Interval to update the progress bar
    var interval = setInterval(function() {
        progressBarValue += 1; // Adjust the increment value as needed
        progressBar.style.width = progressBarValue + '%';

        if (progressBarValue >= 100) {
            clearInterval(interval);
        }
    }, 50); // Adjust the interval duration as needed

    // Simulate an AJAX request delay and response time
    $.ajax({
        url: '/submit',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {
            // Simulate a delay before showing the response
            setTimeout(function() {
                result.innerHTML = '<img src="static/icons/Chatbot.png" alt="Image Preview" class="result-image" style="width:40px"><br>Received response!';
                showSuccessMessage();

                // Clear the placeholder text after sending the message
                $('#textInput').val('');

                // Hide the progress bar after receiving the response
                progressBar.style.display = 'none';
                progressBar.style.width = '0%'; // Reset progress bar width
            }, 1500); // Simulated response delay (adjust this to match your backend response time)
        },
        error: function(error) {
            console.error('Error:', error);
            // Handle error
        }
    });
}
