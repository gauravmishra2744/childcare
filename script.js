document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;
  
    // Default to light mode
    body.classList.add("light-mode");
  
    toggleButton.addEventListener("click", () => {
      if (body.classList.contains("light-mode")) {
        body.classList.replace("light-mode", "dark-mode");
        toggleButton.textContent = "Light Mode";
      } else {
        body.classList.replace("dark-mode", "light-mode");
        toggleButton.textContent = "Dark Mode";
      }
    });
  });
  