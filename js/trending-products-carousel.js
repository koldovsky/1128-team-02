const trendingProducts = [
  {
    id: "1",
    link: "dora-metal-pet-brush.html",
    image: "img/metal-pet-brush.png",
    alt: "Metal Pet Brush",
    description: "DORA Metal Pet Brush",
    price: "$15,00",
  },
  {
    id: "2",
    link: "kittens-heaven-set.html",
    image: "img/kittens-heaven-set.png",
    alt: "Kitten`s Heaven Set",
    description: "Kitten`s Heaven Set",
    price: "$12,00",
  },
  {
    id: "3",
    link: "opty-pet-carrier.html",
    image: "img/pet-carrier-with-cat.png",
    alt: "OPTY Pet Carrier",
    description: "OPTY Pet Carrier",
    price: "$8,00",
  },
  {
    id: "4",
    link: "aga-rope-toy.html",
    image: "img/rope-toy.png",
    alt: "AGA Rope Toy",
    description: "AGA Rope Toy",
    price: "$5,00",
  },
  {
    id: "5",
    link: "dora-pet-carrier.html",
    image: "img/pet-parrier.png",
    alt: "DORA Pet Carrier",
    description: "DORA Pet Carrier",
    price: "$23,00",
  },
];

function renderTrendingProducts(trendingProducts) {
  let trendingProductsHtml = [];
  for (const product of trendingProducts) {
    const productHtml = `
        <article class="trending-products__carousel-slides-item">
          <a href="${product.link}" class="trending-products__click-link">
            <img class="trending-products__click-link-img" src="${product.image}" alt="${product.alt}">
          </a>
          <a href="${product.link}" class="trending-products__item-title">${product.description}</a>
          <span class="trending-products__price" data-test="price">${product.price}</span>
          <button class="trending-products__button" type="button">Add to Cart</button>
        </article>`;
    trendingProductsHtml.push(productHtml);
  }
  return trendingProductsHtml;
}

const carouselSlides = renderTrendingProducts(trendingProducts);

let carouselSlideIdx = 0;

const carouselSlideContainer = document.querySelector(
  ".trending-products__carousel-slides"
);

function renderCarouselSlide() {
  carouselSlideContainer.innerHTML = carouselSlides[carouselSlideIdx];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx =
      carouselSlideIdx + 1 >= carouselSlides.length ? 0 : carouselSlideIdx + 1;
    carouselSlideContainer.innerHTML += carouselSlides[secondSlideIdx];
    if (window.matchMedia("(min-width: 980px)").matches) {
      const thirdSlideIdx =
        secondSlideIdx + 1 >= carouselSlides.length ? 0 : secondSlideIdx + 1;
      carouselSlideContainer.innerHTML += carouselSlides[thirdSlideIdx];
      if (window.matchMedia("(min-width: 1200px)").matches) {
        const fourthSlideIdx =
          thirdSlideIdx + 1 >= carouselSlides.length ? 0 : thirdSlideIdx + 1;
        carouselSlideContainer.innerHTML += carouselSlides[fourthSlideIdx];
      }
    }
  }
}

function nextCarouselSlide() {
  carouselSlideIdx =
    carouselSlideIdx + 1 >= carouselSlides.length ? 0 : carouselSlideIdx + 1;
  renderCarouselSlide();
}

function prevCarouselSlide() {
  carouselSlideIdx =
    carouselSlideIdx - 1 < 0 ? carouselSlides.length - 1 : carouselSlideIdx - 1;
  renderCarouselSlide();
}

setInterval(nextCarouselSlide, 5000);

const buttonCarouselNext = document.querySelector(
  ".trending-products__btn-next"
);
buttonCarouselNext.addEventListener("click", nextCarouselSlide);

const buttonCarouselPrev = document.querySelector(
  ".trending-products__btn-prev"
);
buttonCarouselPrev.addEventListener("click", prevCarouselSlide);

renderCarouselSlide();

window.addEventListener("resize", renderCarouselSlide);
