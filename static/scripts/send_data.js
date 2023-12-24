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
            result.innerHTML ='<h2>Generated details : <<h2><h3>'+data.data;
            showSuccessMessage();
            // Handle success
        },
        error: function(error) {
            console.error('Error:', error);
            // Handle error
        }
    });
}



let isScrollingDown = true;

window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        isScrollingDown = true;
    } else {
        isScrollingDown = false;
    }
});

function scrollToBottom() {
    if (isScrollingDown) {
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(scrollToBottom, 100); // Adjust the delay if needed
    }
}

scrollToBottom();
