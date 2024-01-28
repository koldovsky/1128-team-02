const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.products__carousel-animals-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
let slideWidth = slides[0].offsetWidth; // Змінено з carousel.offsetWidth на slides[0].offsetWidth

showSlide(currentIndex);

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
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

