function sendMessage() {
    var userInput = $('#textInput').val();
    console.log(userInput)
    var result = document.getElementById('results');
    var formData = new FormData();
    
    formData.append('message', userInput);   
    console.log('2')
    $.ajax({
        url: '/submit',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {
            result.innerHTML ='<img src="static/icons/Chatbot.png" alt="Image Preview" class="result-image" style="width:40px"><br>'+data.data;
            showSuccessMessage();
            // Handle success
        },
        error: function(error) {
            console.error('Error:', error);
            // Handle error
        }
    });
}

