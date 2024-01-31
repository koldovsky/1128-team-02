const carouselReview = document.querySelector(
  ".customer-reviews__carousel-slides"
);
const slidesReview = document.querySelectorAll(
  ".customer-reviews__carousel-slides-item"
);
const prevButtonReview = document.querySelector(
  ".customer-reviews__carousel-btn-prev"
);
const nextButtonReview = document.querySelector(
  ".customer-reviews__carousel-btn-next"
);

let currentIndexReview = 0;
let carouselReviewWidthReview = carouselReview.offsetWidth;

showSlideReview(currentIndexReview);

function showSlideReview(index) {
  carouselReview.style.transform = `translateX(-${
    index * (100 / getVisibleSlidesReview())
  }%)`;
}

function nextSlideReview() {
  if (currentIndexReview < slidesReview.length - getVisibleSlidesReview()) {
    currentIndexReview++;
    showSlideReview(currentIndexReview);
  }
}

function prevSlideReview() {
  if (currentIndexReview > 0) {
    currentIndexReview--;
    showSlideReview(currentIndexReview);
  }
}

prevButtonReview.addEventListener("click", prevSlideReview);
nextButtonReview.addEventListener("click", nextSlideReview);

function getVisibleSlidesReview() {
  if (window.innerWidth >= 1024) {
    return 3;
  } else if (window.innerWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
}

window.addEventListener("resize", () => {
  carouselReviewWidthReview = carouselReview.offsetWidth;
});

//function changeButtonPosition() {
  //    const newLeftValue = 8 + (7 * (carouselWidth / 100));
  //    prevButton.style.right = newLeftValue + '%';
  //
  //    const newRightValue = -75 + (9 * (carouselWidth / 100));
  //    nextButton.style.right = newRightValue + '%';
  //
  //}
  //changeButtonPosition();
