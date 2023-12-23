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



// Simulating progress with a timer
function move() {
  let elem = document.getElementById("myBar");
  let width = 0;
  let id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
      showNotification();
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

// Showing a notification
function showNotification() {
  alert("Progress Complete!");
}

// Triggering the progress bar animation
move();
