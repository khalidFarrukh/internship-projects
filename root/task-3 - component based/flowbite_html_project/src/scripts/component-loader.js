const fileType = ".txt"
const currentScrpt = document.currentScript;
const componentPath = currentScrpt.getAttribute("data-component-path");
const containerId = currentScrpt.getAttribute("data-container-id");

document.addEventListener("DOMContentLoaded", () => {
  fetch(componentPath + fileType)
    .then(response => response.text())
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading navbar:", error);
    });
});
