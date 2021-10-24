// navigation hamburger
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

// image slides
let slideIndex = 0;
showSlides();

// next slide
function nextSlide() {
  slideIndex++;
  showSlides();
}
// previous slide
function prevSlide() {
  slideIndex--;
  showSlides();
}

// dot image controls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // hide slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // show slide base on index
  slides[slideIndex].style.display = "block";

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[slideIndex].classList.add("active");
}
