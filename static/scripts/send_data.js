function sendMessage() {
    var start = performance.now(); // Record start time
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
            var end = performance.now(); // Record end time
            var processingTime = end - start; // Calculate processing time in milliseconds

            // Update the processing time in the HTML element
            document.getElementById('time').textContent = processingTime.toFixed(2);

            result.innerHTML = '<img src="" alt="Image Preview" class="result-image" style="width:40px"><p><b>Generated text</b></p>' + data.data;
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
