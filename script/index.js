const burger = document.querySelector(".burger");
const menu = document.querySelector(".navigation_mobile");
const services = document.querySelectorAll(".service");
const services_drop_downs = document.querySelectorAll(".services__drop_down");
const members_image = document.querySelectorAll(".our_team__member-image");
const members_info = document.querySelectorAll(".our_team__info");

$(document).ready(function () {
  if (window.addEventListener) {
    burger.addEventListener("click", toggleMenu, false);
    for (let i = 0; i < services.length; i++) {
      services[i].addEventListener("click", toggleDropDown(i), false);
    }
    for (let i = 0; i < members_image.length; i++){
      members_image[i].addEventListener("click", toggleMember(i));
    }
  } else if (window.attachEvent) {
    burger.attachEvent("click", toggleMenu);
    for (let i = 0; i < services.length; i++) {
      services[i].attachEvent("click", toggleDropDown(i));
    }
    for (let i = 0; i < members_image.length; i++){
      members_image[i].attachEvent("click", toggleMember(i));
    }
  }
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

$('.our_team_slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
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

function toggleMember(i) {
  return function () {
    for (let j = 0; j < members_image.length; j++){
      members_image[j].classList.remove("member_image-active");
      members_info[j].classList.remove("member_info-active");
    }
    members_image[i].classList.add("member_image-active");
    members_info[i].classList.add("member_info-active");
  }
}