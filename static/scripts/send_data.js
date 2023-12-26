function sendMessage() {
    var userInput = $('#textInput').val();
    console.log(userInput)
    var result = document.getElementById('results');
    var formData = new FormData();

    formData.append('message', userInput);

    // Check if userInput contains '/art'
    if (userInput.includes('/art')) {
        window.location.href = 'https://dub9yt9jaous2llnwnuokw.on.drv.tw/Indexart.html'; // Replace with your desired URL
        return; // Stop further execution
    }



// Check if userInput contains '/art'
    if (userInput.includes('/contact')) {
        window.location.href = 'mailto:wdsejamenath@gmail.com'; // Replace with your desired URL
        return; // Stop further execution
    }













     if (userInput.includes('/github')) {
         window.location.href = 'https://github.com/sejamenath-developer'; // Replace with your desired URL
        return; // Stop further execution
    }








     if (userInput.includes('/fb')) {
         window.location.href = 'https://www.facebook.com/sejamenathdesilva?mibextid=ZbWKwL'; // Replace with your desired URL
        return; // Stop further execution
    }



  if (userInput.includes('/youtube')) {
      window.location.href = 'https://www.youtube.com'; // Replace with your desired URL
        return; // Stop further execution
    }








    console.log('2')
    $.ajax({
        url: '/submit',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {
            result.innerHTML = '<h2>DETAILS <h2><h3>' + data.data;
            showSuccessMessage();
            // Handle success
        },
        error: function(error) {
            console.error('Error:', error);
            // Handle error
        }
    });
}
