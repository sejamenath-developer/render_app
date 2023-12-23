// Simulating a process with start and end times
function simulateProcess() {
  var startTime = performance.now(); // Record start time
  // Simulate some process (e.g., fetching data, calculations)
  for (var i = 0; i < 100000; i++) {
    // Perform some task
  }
  var endTime = performance.now(); // Record end time

  var progressBar = document.createElement('div');
  progressBar.style.width = '0%';
  progressBar.style.height = '20px';
  progressBar.style.backgroundColor = '#4caf50';
  progressBar.style.transition = 'width 0.3s ease-in-out';

  var progressBarContainer = document.createElement('div');
  progressBarContainer.style.width = '100%';
  progressBarContainer.style.backgroundColor = '#ddd';
  progressBarContainer.appendChild(progressBar);

  document.body.appendChild(progressBarContainer);

  var processingTime = endTime - startTime;

  // Update progress bar width based on processing time
  var progressBarWidth = (processingTime / 1000) * 100; // Assuming a max processing time of 1000ms
  progressBar.style.width = progressBarWidth + '%';
}

// Call the function to simulate a process
simulateProcess();
