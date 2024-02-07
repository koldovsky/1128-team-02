const trendingProducts = [
  {
    id: "11",
    link: "dora-metal-pet-brush.html",
    image: "img/dorametalpetbrush.png",
    title: "DORA Metal Pet Brush",
    price: "$15,00",
    description:
      "Keep your pet's coat soft, manageable, and good-looking will be much easier with this brush. It has flexible meal pins to remove excess fur and tangles while not hurting your pet.",
  },
  {
    id: "21",
    link: "kittens-heaven-set.html",
    image: "img/kittensheavenset.png",
    title: "Kitten's Heaven Set",
    price: "$12,00",
    description:
      "Have you adopted a kitten? Congratulations! It will love this set of toys for sure. Here is everything to entertain your pet — bright woolen mice, sticks with ropes, and clinking balls.",
  },
  {
    id: "22",
    link: "opty-pet-carrier.html",
    image: "img/optypetcarrier.png",
    title: "OPTY Pet Carrier",
    price: "$8,00",
    description:
      "This plastic carrier is large enough even for adult cats. We cannot relieve pets of the stress of being carried outside, but we can make it more comfortable, right?",
  },
  {
    id: "7",
    link: "aga-rope-toy.html",
    image: "img/agaropetoy.png",
    title: "AGA Rope Toy",
    price: "$5,00",
    description:
      "Play with your dog with this great and simple toy. It features a tennis ball in the middle with a knotted rope running through it. Great for tug-and-fetch games.",
  },
  {
    id: "12",
    link: "dora-pet-carrier.html",
    image: "img/dorapetcarrier.png",
    title: "DORA Pet Carrier",
    price: "$23,00",
    description:
      "Do you need to go somewhere with your pet? This carrier is perfect for this. It allows enough air to pass through thanks to the grate and allows the pet to see what is happening around.",
  },
];

function renderTrendingProducts(trendingProducts) {
  let trendingProductsHtml = [];
  for (const product of trendingProducts) {
    const productHtml = `
        <article class="trending-products__carousel-slides-item">
          <a href="item-card-page.html" class="trending-products__click-link" data-id="${product.id}">
            <img class="trending-products__click-link-img" src="${product.image}" alt="${product.title}">
          </a>
          <a href="${product.link}" class="trending-products__item-title">${product.title}</a>
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
  attachEventListenersToLinks();
}

function attachEventListenersToLinks() {
  document
    .querySelectorAll(".trending-products__click-link")
    .forEach((item) => {
      item.removeEventListener("click", handleProductClick);
      item.addEventListener("click", handleProductClick);
    });
}

function handleProductClick(e) {
  const productId = e.target.closest(".trending-products__click-link").dataset
    .id;
  const product = trendingProducts.find((p) => p.id === productId);
  if (product) {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
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
