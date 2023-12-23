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
        progressBarValue += 2; // Adjust the increment value as needed
        progressBar.style.width = progressBarValue + '%';

        if (progressBarValue >= 100) {
            clearInterval(interval);
        }
    }, 100); // Adjust the interval duration as needed

    // Simulate a delay (replace this with your actual AJAX request)
    setTimeout(function() {
        // This simulates a successful response after a delay
        result.innerHTML = '<br>Generated Resalt  •<br>';
        showSuccessMessage();

        // Clear the placeholder text after sending the message
        $('#textInput').val('');

        // Hide the progress bar after receiving the response
        progressBar.style.display = 'none';
        progressBar.style.width = '0%'; // Reset progress bar width
    }, 3000); // Simulated response delay (replace this with your actual AJAX request)

    // This is where you would put your actual AJAX request using $.ajax
    // Example:
    /*
    $.ajax({
        url: '/submit',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {
            // Handle the response data
        },
        error: function(error) {
            // Handle error
        }
    });
    */
}
