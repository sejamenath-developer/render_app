function sendMessage() {
    var userInput = $('#textInput').val();
    console.log(userInput)
    var result = document.getElementById('results');
    var formData = new FormData();

    formData.append('message', userInput);

    // Check if userInput contains '/art'
    if (userInput.includes('/img')) {
        window.location.href = 'https://dub9yt9jaous2llnwnuokw.on.drv.tw/Indexart.html'; // Replace with your desired URL
        return; // Stop further execution
    }



// Check if userInput contains '/art'
    if (userInput.includes('/contact')) {
        window.location.href = 'mailto:wdsejamenath@gmail.com'; // Replace with your desired URL
        return; // Stop further execution
    }



   if (userInput.includes('/shortnews')) {
        window.location.href = 'https://ksvmuralidhar-news-summarizer-ner.hf.space'; // Replace with your desired URL
        return; // Stop further execution
    }




if (userInput.includes('/genvideo')) {
        window.location.href = 'https://radames-real-time-sd-turbo.hf.space'; // Replace with your desired URL
        return; // Stop further execution
    }



if (userInput.startsWith('/fb ')) {
    var username = userInput.substring(4); // Extract the username after '/fb '
    var fbAppURL = 'fb://profile/' + username; // Construct the Facebook app URL
    window.location.href = fbAppURL; // Redirect to the Facebook app if available
    setTimeout(function() {
        // If the Facebook app isn't available, redirect to the web URL
        window.location.href = 'https://www.facebook.com/' + username;
    }, 4000); // Set a timeout to redirect to web URL after 1 second if app isn't opened
    return; // Stop further execution
}









     if (userInput.includes('/github')) {
         window.location.href = 'https://github.com/sejamenath-developer'; // Replace with your desired URL
        return; // Stop further execution
    }

if (userInput.includes('/upscale')) {
         window.location.href = 'https://sejamenath2023-image-upscaling-playground2.hf.space/'; // Replace with your desired URL
        return; // Stop further execution
    }


if (userInput.includes('/art')) {
         window.location.href = 'https://ejucpx0ochj5sjq21z5jxq.on.drv.tw/Aiart.html'; // Replace with your desired URL
        return; // Stop further execution
    }






     if (userInput.includes('/fb')) {
         window.location.href = 'https://www.facebook.com/sejamenathdesilva?mibextid=ZbWKwL'; // Replace with your desired URL
        return; // Stop further execution
    }



  if (userInput.includes('/chat')) {
      window.location.href = 'https://dub9yt9jaous2llnwnuokw.on.drv.tw/NUROAIRELEASE2023DECEMBER22/Slashaichatbot  '; // Replace with your desired URL
        return; // Stop further execution
    }


if (userInput.includes('/bgremove')) {
      window.location.href = 'https://sejamenath2023-bgremoveslashai1.hf.space/ '; // Replace with your desired URL
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
