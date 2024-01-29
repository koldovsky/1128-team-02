const carouselReview = document.querySelector('.customer-reviews__carousel-slides');
const slidesReview = document.querySelector('.customer-reviews__carousel-slides-item');
const prevButtonReview = document.querySelector('.customer-reviews__carousel-btn-prev');
const nextButtonReview = document.querySelector('.customer-reviews__carousel-btn-next');

let currentIndexReview = 0;
let carouselWidthReview = carouselReview.offsetWidth;

showSlideReview(currentIndexReview);

function showSlideReview(index){
    carouselReview.style.transform = `translateX(-${index * (100 / getVisibleSlides())}%)`;
}

function nextSlideReview() {
    if(currentIndexReview < slidesReview.length - getVisibleSlidesReview()) {
        currentIndexReview++;
        showSlideReview(currentIndexReview);
    }
}

function prevSlideReview() {
    if(currentIndexReview > 0) {
        currentIndexReview--;
        showSlideReview(currentIndexReview);
    }
}

prevButtonReview.addEventListener('click', prevSlideReview);
nextButtonReview.addEventListener('click', nextSlideReview);

function getVisibleSlidesReview() {
    if(window.innerWidth >= 1024) {
        return 3;
    }else if(window.innerWidth >= 768) {
        return 2;
    }else {
        return 1;
    }
}

window.addEventListener('resize', () => {
    carouselWidthReview = carouselReview.offsetWidth;
});