document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelectorAll(".nav a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      toggle.checked = false;
    });
  });
});
