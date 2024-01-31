const carousel = document.querySelector(".partners__carousel-slides");
const slides = document.querySelectorAll(".partners__carousel-slides-item");
const prevButton = document.querySelector(".partners__carousel-btn-prev");
const nextButton = document.querySelector(".partners__carousel-btn-next");

let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slides[0].offsetWidth ; 
  const transformValue = -slideWidth * index;
  carousel.style.transform = `translateX(${transformValue}px)`;
  updateButtonStates();
}

function nextSlide() {
  let maxIndex = slides.length - getVisibleSlides();
  if (currentIndex < maxIndex) {
    currentIndex++;
    showSlide(currentIndex);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

function getVisibleSlides() {
  if (window.innerWidth >= 1200) {
    return 5;
  } else if (window.innerWidth >= 992) {
    return 4;
  } else if (window.innerWidth >= 768) {
    return 3;
  } else if (window.innerWidth >= 480) {
    return 2;
  } else {
    return 1;
  }
}

window.addEventListener("resize", () => {
  showSlide(currentIndex);
});

