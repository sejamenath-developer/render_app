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
            result.innerHTML = '<img src="https://i.pinimg.com/originals/a3/89/fb/a389fb3d67ee3836479191686474621f.gif" alt="Image Preview" class="result-image" style="width:40px"><p><b>Generated text<b></p>' + data.data;
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