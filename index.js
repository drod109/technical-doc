document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.querySelector(".menu-icon");
  var header = document.querySelector("header");

  function toggleNav() {
    header.classList.toggle("active");
  }

  menuIcon.addEventListener("click", toggleNav);

  document
    .querySelectorAll("#navbar .menu-item a")
    .forEach(function (menuItem) {
      menuItem.addEventListener("click", toggleNav);
    });

  document
    .getElementById("toggle-theme")
    .addEventListener("click", function () {
      document.documentElement.classList.toggle("dark-theme");
    });
});
