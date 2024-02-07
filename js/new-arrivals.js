const arrivals = [
  {
    id: "34",
    link: "#",
    image: "img/vitalifecrunchstickstreat.png",
    title: "VITALIFE Crunch Sticks Treat",
    price: "$5,00",
    description:
      "Treat your hamster or rabbit to a crunchy baked treat stick. It is made with seeds, whole grains, vitamins, and extra calcium. Support your pet's healthy teeth!",
  },
  {
    id: "18",
    link: "#",
    image: "img/dunawoventoy.png",
    title: "DUNA Woven Toy",
    price: "$1,50",
    description:
      "Here's a universal toy for your pet. It can bite, throw, and scratch this woolen jingle toy, and still, it will serve you for a very long time.",
  },
  {
    id: "26",
    link: "#",
    image: "img/serawovenleash.png",
    title: "SERA Woven Leash",
    price: "$2,00",
    description:
      "Simple and lightweight leash for your pet. The red color will keep your companion in sight in the crowd.",
  },
  {
    id: "23",
    link: "#",
    image: "img/optyplasticbowl.png",
    title: "OPTY Plastic Bowl",
    price: "$3,00",
    description:
      "This is a simple and safe bowl for your animal to use for both food and water. The bowl is made of high-quality plastic.",
  },
  {
    id: "19",
    link: "#",
    image: "img/egobutterflytoy.png",
    title: "EGO Butterfly Toy",
    price: "$8,00",
    description:
      "This toy will entertain your cat for a long time. The butterfly is attached to the base with a spring and will swing in all directions, attracting the attention of your pet.",
  },
];

function renderArrivals(arrivals) {
  let arrivalsHtml = [];
  for (const arrival of arrivals) {
    const arrivalHtml = `<figure class="arrivals__carousel-slides-item">
    <a href="#" class="arrivals__carousel-slides-img" data-id="${arrival.id}">
      <img src="${arrival.image}" alt="${arrival.title}" class="arrivals__carousel-slides-item-image" />
      </a>
      <figcaption class="arrivals__carousel-slides-item-name">
        <a href="javascript:void(0);" class="arrivals__link arrivals__carousel-slides-item-name" data-id="${arrival.id}">${arrival.title}</a>
      </figcaption>
      <figcaption class="arrivals__carousel-slides-item-price">
        ${arrival.price}
      </figcaption>
      <button class="arrivals__carousel-slides-item-btn-add" type="button" data-id="${arrival.id}">
        <span class="arrivals__carousel-btn-content">Add to Cart</span>
      </button>
    </figure>`;
    arrivalsHtml.push(arrivalHtml);
  }
  return arrivalsHtml;
}

function attachEventListeners() {
  document
    .querySelectorAll(".arrivals__carousel-slides-item")
    .forEach((item) => {
      item.addEventListener("click", (e) => {
        const target = e.target.closest("[data-id]");
        if (!target) return;

        const productId = target.dataset.id;
        const product = arrivals.find((p) => p.id === productId);
        if (product) {
          localStorage.setItem("selectedProduct", JSON.stringify(product));
          window.location.href = `item-card-page.html?productId=${productId}`;
        }
        e.preventDefault();
      });
    });
}

renderArrivals(arrivals);

const slides = renderArrivals(arrivals);

let slideIdx = 0;

const slideContainer = document.querySelector(".arrivals__carousel-slides");

function renderSlide() {
  slideContainer.innerHTML = slides[slideIdx];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
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
  attachEventListeners();
}

function nextSlide() {
  slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
  renderSlide();
}

function prevSlide() {
  slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
  renderSlide();
}

setInterval(nextSlide, 3000);

const btnNext = document.querySelector(".arrivals__carousel-btn-next");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".arrivals__carousel-btn-prev");
btnPrev.addEventListener("click", prevSlide);

renderSlide();

window.addEventListener("resize", renderSlide);
