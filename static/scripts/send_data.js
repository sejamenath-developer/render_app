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
            var sinhalaText = new Intl.DisplayNames(['si'], { type: 'language' }).of(data.data);
            result.innerHTML = '<img src="static/icons/tmp-camera-1703274705850.png" alt="Image Preview" class="result-image" style="width:40px"><br>' + sinhalaText;
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
