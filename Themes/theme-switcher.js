document.addEventListener("DOMContentLoaded", function () {
    const themeLink = document.getElementById("theme-link");
    const toggleButton = document.getElementById("toggle-theme-button");
    let currentTheme = "light";
  
    // Function to set the theme
    function setTheme(theme) {
      themeLink.href = `${theme}.css`;
      currentTheme = theme;
    }
  
    // Function to toggle the theme
    function toggleTheme() {
      if (currentTheme === "light") {
        setTheme("dark");
      } else if (currentTheme === "dark") {
        setTheme("personal");
      } else {
        setTheme("light");
      }
    }
  
    // Add event listener to the toggle button
    toggleButton.addEventListener("click", toggleTheme);
  });
  
  