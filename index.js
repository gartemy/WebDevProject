// Declaring variables for working with the Mobile Menu
const body = document.querySelector('body');
const header = document.querySelectorAll('.header')[0];
const headerMenu = document.querySelectorAll('.header__menu')[0];
const headerNavigation = document.querySelectorAll('.header__navigation')[0];
const headerLinks = document.querySelectorAll('.header__navigation-link');

// Mobile Menu (show when the menu icon is clicked)
headerMenu.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  header.classList.toggle('active');
  headerNavigation.classList.toggle('active');
  body.classList.toggle('lock');
});

// Mobile Menu animation (hide when clicking a link)
headerLinks.forEach((item) => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 880) {
      headerMenu.classList.toggle('active');
      header.classList.toggle('active');
      headerNavigation.classList.toggle('active');
      body.classList.toggle('lock');
    }
  });
});

// Show Mobile Menu when the screen is rotated (on mobile devices)
window.addEventListener(
  'orientationchange',
  () => {
    if (headerNavigation.style.display === 'none') {
      headerNavigation.removeAttribute('style');
    }
  },
  false
);

// Arrow-up animation
window.onscroll = () => {
  if (this.scrollY > 834) {
    document.querySelectorAll('.arrow-up')[0].style.display = 'flex';
  } else {
    document.querySelectorAll('.arrow-up')[0].style.display = 'none';
  }
};

// Smooth scrolling of anchors
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1); // Get the name of the anchor

    // If the link has an anchor that apply method scrollIntoView for smooth scrolling
    if (blockID !== '') {
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
}

// Carousel for Our-team section
let slideIndex = 1;

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

const showSlides = (n) => {
  const slides = document.getElementsByClassName('our-team__items');
  const dots = document.getElementsByClassName('our-team__slider-slide');

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active';
};
