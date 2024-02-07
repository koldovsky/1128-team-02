const arrivals = [
  {
    id: "1",
    link: "storehomepage.html",
    image: "img/vitalifecrunchstickstreat.png",
    alt: "VITALIFE Crunch Sticks",
    title: "VITALIFE Crunch Sticks",
    price: "$ 5,00",
  },
  {
    id: "2",
    link: "storehomepage.html",
    image: "img/dunawoventoy.png",
    alt: "DUNA Woven Toy",
    title: "DUNA Woven Toy",
    price: "$ 1,50",
  },
  {
    id: "3",
    link: "storehomepage.html",
    image: "img/serawovenleash.png",
    alt: "SERA Woven Leash",
    title: "SERA Woven Leash",
    price: "$ 2,00",
  },
  {
    id: "4",
    link: "storehomepage.html",
    image: "img/optyplasticbowl.png",
    alt: "OPTY Plastic Bowl",
    title: "OPTY Plastic Bowl",
    price: "$ 3,00",
  },
  {
    id: "5",
    link: "storehomepage.html",
    image: "img/egobutterflytoy.png",
    alt: "EGO Butterfly Toy",
    title: "EGO Butterfly Toy",
    price: "$ 8,00",
  },
];

function renderArrivals(arrivals) {
  let arrivalsHtml = [];
  for (const arrival of arrivals) {
    const arrivalHtml = `<figure class="arrivals__carousel-slides-item">
    <img
      src="${arrival.image}"
      alt="${arrival.alt}"
      class="arrivals__carousel-slides-item-image"
    />
    <a href="storehomepage.html"
      ><figcaption class="arrivals__carousel-slides-item-name">
        ${arrival.title}
      </figcaption></a
    >
    <figcaption class="arrivals__carousel-slides-item-price">
      ${arrival.price}
    </figcaption>
    <a href="storehomepage.html"
      ><button class="arrivals__carousel-slides-item-btn-add" type="button">
        <span class="arrivals__carousel-btn-content"> Add to Cart</span>
      </button></a
    >
  </figure>`;
    arrivalsHtml.push(arrivalHtml);
  }
  return arrivalsHtml;
}

renderArrivals(arrivals);

const slides = renderArrivals(arrivals);

let slideIdx = 0;

const slideContainer = document.querySelector(
  '.arrivals__carousel-slides'
);

function renderSlide() {
  slideContainer.innerHTML = slides[slideIdx];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx =
      slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(min-width: 980px)").matches) {
      const thirdSlideIdx =
        secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += slides[thirdSlideIdx];
      if (window.matchMedia("(min-width: 1200px)").matches) {
        const fourthSlideIdx =
          thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
        slideContainer.innerHTML += slides[fourthSlideIdx];
      }
    }
  }
}

function nextSlide() {
  slideIdx =
    slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
  renderSlide();
}

function prevSlide() {
  slideIdx =
    slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
  renderSlide();
}

setInterval(nextSlide, 5000);

const btnNext = document.querySelector(
  ".arrivals__carousel-btn-next"
);
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(
  ".arrivals__carousel-btn-prev"
);
btnPrev.addEventListener("click", prevSlide);

renderSlide();

window.addEventListener("resize", renderSlide);
