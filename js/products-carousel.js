const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.products__carousel-animals-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
let carouselWidth = carousel ? carousel.offsetWidth : 0;

showSlide(currentIndex);

function showSlide(index) {
    if (carousel) {
        carousel.style.transform = `translateX(-${index * (100 / getVisibleSlides())}%)`;
    }
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

if (prevButton && nextButton) {
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
}

function getVisibleSlides() {
    if (window.innerWidth >= 1200) {
        return 4;
    } else if (window.innerWidth >= 768) {
        return 2;
    } else {
        return 1;
    }
}


window.addEventListener('resize', () => {
    if (carousel) {
        carouselWidth = carousel.offsetWidth;
        showSlide(currentIndex);
    }
});
