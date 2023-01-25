const Button = document.getElementById("menu-btn");
const Menu = document.getElementById("menu");

Button.addEventListener("click", navToggle);

function navToggle() {
  Button.classList.toggle("open");
  Menu.classList.toggle("flex");
  Menu.classList.toggle("hidden");
}
