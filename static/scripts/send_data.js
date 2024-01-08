
function showLoadingMessage() {
    $('#loadingMessage').removeClass('hidden');
}

function hideLoadingMessage() {
    $('#loadingMessage').addClass('hidden');
}


function sendMessage() {
    var userInput = $('#textInput').val();
    console.log(userInput)
    var result = document.getElementById('results');
    var formData = new FormData();

    formData.append('message', userInput);




showLoadingMessage(); // Show "Generating..." message

    // Your existing code...



    

$('#textInput').val(''); // This line clears the input box after sending the message




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




if (userInput.includes('/autogen')) {
         window.location.href = 'https://gpt-video-jidefr.vercel.app/'; // Replace with your desired URL
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








console.log('2')
    $.ajax({
        url: '/submit',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {


hideLoadingMessage();



            result.innerHTML = '<h2>DETAILS</h2><br>' + data.data;
            showSuccessMessage();
            // Handle success
        },
        error: function(error) {


hideLoadingMessage(); 


            console.error('Error:', error);




            // Handle error
        }
    });
}