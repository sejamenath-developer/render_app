function previewImage(input) {
    var preview = document.getElementById('imagePreview');
    var container = document.getElementById('imagePreviewContainer');

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        container.style.display = 'block'; 
        reader.onload = function(e) {
            preview.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    } else {
        preview.src = '#';
        container.style.display = 'none';
    }
}