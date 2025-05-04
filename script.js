// Animation Trigger
document.getElementById("animate-btn").addEventListener("click", () => {
    const box = document.getElementById("box");
    box.classList.remove("animate"); // Reset animation
    void box.offsetWidth;            // Reflow trick
    box.classList.add("animate");
  });
  
  // Theme Handling with localStorage
  function setTheme(theme) {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem("preferredTheme", theme);
  }
  
  // On page load, apply stored theme
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("preferredTheme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  });
  