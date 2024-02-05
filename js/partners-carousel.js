const carousel = document.querySelector(".partners__carousel-slides");
const slides = document.querySelectorAll(".partners__carousel-slides-item");
const prevButton = document.querySelector(".partners__carousel-btn-prev");
const nextButton = document.querySelector(".partners__carousel-btn-next");

let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slides[0].offsetWidth;
  const newTransformValue = -slideWidth * index;
  carousel.style.transform = `translateX(${newTransformValue}px)`;
}

function nextSlide() {
  if (currentIndex < slides.length - getVisibleSlides()) {
    currentIndex++;
    showSlide(currentIndex);
  } else {
    // Optionally, loop back to the first slide
    currentIndex = 0;
    showSlide(currentIndex);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  } else {
    // Optionally, loop back to the last slide
    currentIndex = slides.length - getVisibleSlides();
    showSlide(currentIndex);
  }
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

function getVisibleSlides() {
  if (window.innerWidth >= 1200) {
    return 6; // Show 6 cards for extra large screens
  } else if (window.innerWidth >= 992) {
    return 5; // Show 5 cards for large screens
  } else if (window.innerWidth >= 768) {
    return 4; // Show 4 cards for medium screens
  } else if (window.innerWidth >= 480) {
    return 2; // Show 2 cards for small screens
  } else {
    return 1; // Default to 1 card for extra small screens
  }
}

window.addEventListener("resize", () => {
  showSlide(currentIndex);
});
