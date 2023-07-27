//your JS code here. If required.
// Function to update the width and height values in the h1 tag
function updateSizeInfo() {
  const widthValueSpan = document.getElementById('widthValue');
  const heightValueSpan = document.getElementById('heightValue');

  widthValueSpan.textContent = window.innerWidth;
  heightValueSpan.textContent = window.innerHeight;
}

// Initial update when the page loads
window.onload = function() {
  updateSizeInfo();
};

// Update the size info whenever the window is resized
window.addEventListener('resize', updateSizeInfo);
