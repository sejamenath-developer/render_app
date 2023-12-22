function fileUpload() {
    var fileInput = document.getElementById('fileInput');
    var result = document.getElementById('results');
    var loadingText = document.getElementById('loadingText'); // Add an element for loading text

    fileInput.addEventListener('change', function() {
        var file = fileInput.files[0];
        if (file) {
            var formData = new FormData();
            formData.append('file', file);

            // Display loading text while uploading
            loadingText.innerText = 'Uploading...';

            $.ajax({
                url: '/upload',
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function(data) {
                    console.log(data);
                    showSuccessMessage();
                    loadingText.innerText = ''; // Remove loading text on success
                },
                error: function(error) {
                    console.error('Error:', error);
                    showErrorMessage();
                    loadingText.innerText = ''; // Remove loading text on error
                }
            });
        }
    });
}
