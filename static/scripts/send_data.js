function sendMessage() {
    var userInput = $('#textInput').val();
    var result = document.getElementById('results');
    var formData = new FormData();

    formData.append('message', userInput);

    // Show the progress bar
    var progressBar = document.getElementById('progressBar');
    progressBar.style.display = 'block';
    var width = 1;
    var interval = setInterval(increaseWidth, 10);

    function increaseWidth() {
        if (width >= 100) {
            clearInterval(interval);
            // Hide the progress bar after completion
            progressBar.style.display = 'none';
            
            // Clear the placeholder text after sending the message
            $('#textInput').val('');
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }

    $.ajax({
        url: '/submit',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {
            result.innerHTML = '<h3>® Description generated</h3><br>' + data.data;
            showSuccessMessage();
        },
        error: function(error) {
            console.error('Error:', error);
            // Handle error
        }
    });
}
