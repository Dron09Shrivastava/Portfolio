const logo = document.getElementById("logo");
const splash = document.getElementById("splash");
const mainContent = document.getElementById("main-content");

logo.addEventListener("click", () => {
  // Zoom out + fade animation
  logo.style.transform = "scale(20)";
  logo.style.opacity = "0";

  // After animation, hide splash and show site
  setTimeout(() => {
    splash.style.display = "none";
    mainContent.style.display = "block";
  }, 1000); // matches transition duration
});
