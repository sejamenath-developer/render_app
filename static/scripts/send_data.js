function sendMessage() {
    var userInput = $('#textInput').val();
    var result = document.getElementById('results');
    var processingTimeElement = document.getElementById('processingTime');
    var formData = new FormData();

    formData.append('message', userInput);

    var startTime = performance.now(); // Record start time

    $.ajax({
        url: '/submit',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {
            var endTime = performance.now(); // Record end time
            var processingTime = endTime - startTime; // Calculate processing time

            result.innerHTML = '<img src="" alt="Image Preview" class="result-image" style="width:40px"><p><b>Generated text<b></p>' + data.data;
            showSuccessMessage();
            
            // Display processing time
            processingTimeElement.textContent = 'Processing Time: ' + processingTime.toFixed(2) + ' ms';

            // Clear the placeholder text after sending the message
            $('#textInput').val('');
        },
        error: function(error) {
            console.error('Error:', error);
            // Handle error
        }
    });
}
