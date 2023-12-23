function sendMessage() {
    var userInput = $('#textInput').val();
    var result = document.getElementById('results');
    var formData = new FormData();
    var progressBar = document.getElementById('progressBar');
    var progressBarValue = 0;

    formData.append('message', userInput);

    // Show the progress bar
    progressBar.style.display = 'block';

    // This is just an example. Replace this with your actual AJAX request
    $.ajax({
        url: '/submit',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        beforeSend: function() {
            // Set the expected response time (adjust as needed)
            var expectedResponseTime = 5000; // in milliseconds

            // Calculate the interval duration based on the expected response time
            var intervalDuration = expectedResponseTime / 100;

            // Interval to update the progress bar
            var interval = setInterval(function() {
                progressBarValue += 1; // Adjust the increment value as needed
                progressBar.style.width = progressBarValue + '%';

                if (progressBarValue >= 100) {
                    clearInterval(interval);

                    // Hide the progress bar after receiving the response
                    progressBar.style.display = 'none';
                    progressBar.style.width = '0%'; // Reset progress bar width
                }
            }, intervalDuration);
        },
        success: function(data) {
            // Handle the response data
            result.innerHTML = 'class="result-image" style="width:40px"><h3>   <b>  

Generated Resalt <br>
•••••••••••••••••••••••
</b>

</h3><br>' + data.data;
            showSuccessMessage();

            // Clear the placeholder text after sending the message
            $('#textInput').val('');
        },
        error: function(error) {
            // Handle error
            console.error('Error:', error);

            // Hide the progress bar on error
            progressBar.style.display = 'none';
            progressBar.style.width = '0%'; // Reset progress bar width
        }
    });
}
