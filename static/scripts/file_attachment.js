function fileUpload() {
    var fileInput = document.getElementById('fileInput');
    var result = document.getElementById('results');
    fileInput.addEventListener('change', function() {
        var file = fileInput.files[0];
        if (file) {
            var formData = new FormData();
            formData.append('file', file);

            $.ajax({
                url: '/upload',
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function(data) {
                    console.log(data);
                    showSuccessMessage();
                },
                error: function(error) {
                    console.error('Error:', error);
                    showErrorMessage();
                }
            });
        }
    });
}

function showErrorMessage() {
    console.log('Some Error');
}

function showSuccessMessage() {
    console.log('Success');
}




//  function handleFileUpload() {
//      var fileInput = document.getElementById('fileInput');
//      var result = document.getElementById('results');

//      // Listen for changes in the file input
//      fileInput.addEventListener('change', function () {
//          // Get the selected file
//          var file = fileInput.files[0];

//          // Check if a file is selected
//          if (file) {
//              // Create a FormData object to send the file data
//              var formData = new FormData();
//              formData.append('file', file);

//              // Use Fetch API to send the file data to the server
//              fetch('/upload', {
//                  method: 'POST',
//                  body: formData
//              })
//              .then(response => {
//                  if (response.ok) {
//                      // File upload successful
//                      return response.json(); // Parse JSON response
//                  } else {
//                      // File upload failed
//                      showErrorMessage();
//                  }
//              })        
//              .then(data => {
//                  // Set the generated description as the value of the form field
//                  result.innerHTML = data.description;
//                  showSuccessMessage();
//              })
//             .catch(error => {
//                 // Handle errors
//                 console.error('Error uploading file:', error);
//                 showErrorMessage();
//             });
//         }
//     });

//     // Trigger the file input click event
//     fileInput.click();
// }
