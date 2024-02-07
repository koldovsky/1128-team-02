const newArrivals = [
  `<figure class="arrivals__carousel-slides-item">
  <img src = "img/dunawoventoy.png" alt = "DUNA Woven Toy" class="arrivals__carousel-slides-item-image"/>
  <a href="storehomepage.html"><figcaption class="arrivals__carousel-slides-item-name">DUNA Woven Toy</figcaption>
        </a>
        <figcaption class="arrivals__carousel-slides-item-price">
          $ 1,50
        </figcaption>
        <a href="storehomepage.html"
          ><button class="arrivals__carousel-slides-item-btn-add" type="button">
            <span class="arrivals__carousel-btn-content">Add to Cart</span>
          </button></a
        >
      </figure >`,

  `<figure class="arrivals__carousel-slides-item">
  < img
src = "img/serawovenleash.png"
alt = "SERA Woven Leash"
class="arrivals__carousel-slides-item-image"
  />
        <a href="storehomepage.html"
          ><figcaption class="arrivals__carousel-slides-item-name">
            SERA Woven Leash
          </figcaption></a
        >
        <figcaption class="arrivals__carousel-slides-item-price">
          $ 2,00
        </figcaption>
        <a href="storehomepage.html"
          ><button class="arrivals__carousel-slides-item-btn-add" type="button">
            <span class="arrivals__carousel-btn-content">Add to Cart</span>
          </button></a
        >
      </figure >`,

  `<figure class="arrivals__carousel-slides-item">
  < img
src = "img/optyplasticbowl.png"
alt = "OPTY Plastic Bowl"
class="arrivals__carousel-slides-item-image"
  />
        <a href="storehomepage.html"
          ><figcaption class="arrivals__carousel-slides-item-name">
            OPTY Plastic Bowl
          </figcaption></a
        >
        <figcaption class="arrivals__carousel-slides-item-price">
          $ 3,00
        </figcaption>
        <a href="storehomepage.html"
          ><button class="arrivals__carousel-slides-item-btn-add" type="button">
            <span class="arrivals__carousel-btn-content">Add to Cart</span>
          </button></a
        >
      </figure >`,

  `<figure class="arrivals__carousel-slides-item">
  < img
width = "480"
src = "img/egobutterflytoy.png"
alt = "EGO Butterfly Toy"
class="arrivals__carousel-slides-item-image"
  />
        <a href="storehomepage.html"
          ><figcaption class="arrivals__carousel-slides-item-name">
            EGO Butterfly Toy
          </figcaption></a
        >
        <figcaption class="arrivals__carousel-slides-item-price">
          $ 8,00
        </figcaption>
        <a href="storehomepage.html"
          ><button class="arrivals__carousel-slides-item-btn-add" type="button">
            <span class="arrivals__carousel-btn-content">Add to Cart</span>
          </button></a
        >
      </figure >`
];

let newArrivalsIdx = 0;

const newArrivalsContainer = document.querySelector('.arrivals__carousel-slides');

function renderNewArrivals() {
  newArrivalsContainer.innerHTML = newArrivals[newArrivalsIdx];
}

function nextNewArrival() {
  newArrivalsIdx = newArrivalsIdx + 1 >= newArrivals.length ? 0 : newArrivalsIdx + 1;
  renderNewArrivals();
}

setInterval(nextNewArrival, 3000);

renderNewArrivals();
