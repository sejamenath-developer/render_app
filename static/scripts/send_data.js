function sendMessage() {
            var userInput = $('#textInput').val();
            var result = document.getElementById('results');
            var processingTimeElement = document.getElementById('processingTime');
            var progressBar = document.getElementById('progressBarInner');
            var formData = new FormData();

            formData.append('message', userInput);

            var startTime = performance.now(); // Record start time

            $.ajax({
                url: '/submit',
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                xhr: function () {
                    var xhr = new window.XMLHttpRequest();

                    // Upload progress
                    xhr.upload.addEventListener("progress", function (evt) {
                        if (evt.lengthComputable) {
                            var percentComplete = (evt.loaded / evt.total) * 100;
                            progressBar.style.width = percentComplete + '%';
                        }
                    }, false);

                    return xhr;
                },
                beforeSend: function () {
                    // Show the progress bar before sending the request
                    progressBar.style.width = '0%';
                    progressBar.parentNode.style.display = 'block';
                },
                success: function (data) {
                    var endTime = performance.now(); // Record end time
                    var processingTime = endTime - startTime; // Calculate processing time

                    result.innerHTML = '<p><b>Generated text<b></p>' + data.data;

                    // Display processing time
                    processingTimeElement.textContent = 'Processing Time: ' + processingTime.toFixed(2) + ' s';

                    // Clear the placeholder text after sending the message
                    $('#textInput').val('');
                },
                error: function (error) {
                    console.error('Error:', error);
                    // Handle error
                },
                complete: function () {
                    // Hide the progress bar when the request is complete
                    progressBar.parentNode.style.display = 'none';
                }
            });
        }