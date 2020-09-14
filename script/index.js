const burger = document.querySelector(".burger");
const menu = document.querySelector(".navigation_mobile");
const services = document.querySelectorAll(".service");
const services_drop_downs = document.querySelectorAll(".services__drop_down");

$(document).ready(function () {
  if (window.addEventListener) {
    burger.addEventListener("click", toggleMenu, false);
    for (let i = 0; i < services.length; i++) {
      services[i].addEventListener("click", toggleDropDown(i), false);
    }
  } else if (window.attachEvent) {
    burger.attachEvent("click", toggleMenu);
    for (let i = 0; i < services.length; i++) {
      services[i].attachEvent("click", toggleDropDown(i));
    }
  }
  console.log(document.body.clientWidth);
});


$('.customers_slider-desktop').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  vertical: true,
  verticalSwiping: true
});

$('.customers_slider-mobile').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
});


console.log(services_drop_downs);

function toggleMenu() {
  burger.classList.toggle("burger_active");
  menu.classList.toggle("menu_active");
}

function toggleDropDown(i) {
  return function () {
    services_drop_downs[i].classList.toggle("services__drop_down_active");
  }
}