const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.products__carousel-animals-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
let carouselWidth = carousel.offsetWidth;

showSlide(currentIndex);

function showSlide(index) {
    carousel.style.transform = translateX(-${index * (100 / getVisibleSlides())}%);
}

function nextSlide() {
    if (currentIndex < slides.length - getVisibleSlides()) {
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

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

function getVisibleSlides() {
    if (window.innerWidth >= 1024) {
        return 3; 
    } else if (window.innerWidth >= 768) {
        return 2; 
    } else {
        return 1; 
    }
}