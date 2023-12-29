document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.querySelector(".menu-icon");
  var header = document.querySelector("header");

  menuIcon.addEventListener("click", function () {
    header.classList.toggle("active");
  });

  document
    .getElementById("toggle-theme")
    .addEventListener("click", function () {
      document.documentElement.classList.toggle("dark-theme");
    });
});
