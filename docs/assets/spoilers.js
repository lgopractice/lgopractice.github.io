document.addEventListener("DOMContentLoaded", function() {
  // Find all elements with the 'spoiler' class
  const spoilers = document.querySelectorAll(".spoiler");
  
  spoilers.forEach(function(spoiler) {
    spoiler.addEventListener("click", function() {
      // Toggle the 'revealed' class on click
      this.classList.toggle("revealed");
    });
  });
});