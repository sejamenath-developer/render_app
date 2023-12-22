function fileUpload() {
    var fileInput = document.getElementById('fileInput');
    var result = document.getElementById('results');
    var loadingText = document.getElementById('loadingText');

    fileInput.addEventListener('change', function() {
        var file = fileInput.files[0];
        if (file) {
            var formData = new FormData();
            formData.append('file', file);

            // Display loading text while uploading
            loadingText.classList.remove('hide'); // Show the loading text

            $.ajax({
                url: '/upload',
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function(data) {
                    console.log(data);
                    showSuccessMessage();
                    setTimeout(function() {
                        loadingText.classList.add('hide'); // Hide the loading text after 4 seconds
                    }, 4000);
                },
                error: function(error) {
                    console.error('Error:', error);
                    showErrorMessage();
                    setTimeout(function() {
                        loadingText.classList.add('hide'); // Hide the loading text after 4 seconds
                    }, 4000);
                }
            });
        }
    });
}
