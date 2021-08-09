$(document).ready(() => {
  $(".header__menu").click(function () {
    $(".header").toggleClass("active");
    $(this).toggleClass("active");
    $(".header__navigation").slideToggle(300, function () {
      if ($(this).css("display") === "none") {
        $(this).removeAttr("style");
      }
    });
  });

  $(
    ".web-project__title, .web-project__text, .web-project__buttons, .web-project__arrow"
  )
    .hide()
    .slideToggle(1500);
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    if (blockID !== "") {
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}

let slideIndex = 1;

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

const showSlides = (n) => {
  const slides = document.getElementsByClassName("our-team__items");
  const dots = document.getElementsByClassName("our-team__slider-slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
};
