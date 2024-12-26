document.getElementById("bucket").addEventListener("click", function () {
    const bucket = this;
  
    // Add the animation class
    bucket.classList.add("animate");
  
    // Wait for the animation to finish before redirecting
    setTimeout(() => {
      window.location.href = "https://www.kfc.com"; // Change URL to the desired website
    }, 1000); // Match the duration of the CSS animation
  });
  