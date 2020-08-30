const burger = document.querySelector(".burger");
const menu = document.querySelector(".navigation-mobile");

if (window.addEventListener){
    burger.addEventListener("click", toggleMenu, false);
  } else if (burger.attachEvent){
    burger.attachEvent("click", toggleMenu);
  }

function toggleMenu() {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
}