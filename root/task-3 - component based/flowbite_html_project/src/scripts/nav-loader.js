document.addEventListener("DOMContentLoaded", () => {
  fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav-container").innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading navbar:", error);
    });
});
