document.addEventListener("partialsLoaded", () => {
  import("./cart-modal.js");

  // import('./burger-menu.js');
});

const products = [
  {
    id: "1",
    link: "#",
    image: "img/agabowlforhamsters.png",
    title: "AGA Bowl for Hamsters",
    price: "$2,00",
    description:
      "The plastic hamster bowl is stylish and safe to use. You can pour water or put dry food in there for your pet.",
  },
  {
    id: "2",
    link: "#",
    image: "img/agaclinkingtoy.png",
    title: "AGA Clinking Toy",
    price: "$2,00",
    description:
      "This small toy will keep your pet entertained while you are away. The ball is made of durable rubber, and there is a bell inside. Your rabbit will love it!",
  },
  {
    id: "3",
    link: "#",
    image: "img/agagreencage.png",
    title: "AGA Green Cage",
    price: "$25,00",
    description:
      "This cage is made for active hamsters that enjoy exploring their new home. The cages features easy access and is compatible with other AGA accessories for hamsters.",
  },
  {
    id: "4",
    link: "#",
    image: "img/agaleashandcollar.png",
    title: "AGA Leash & Collar",
    price: "$13,00",
    description:
      "Does your cat like to walk outside with you? Buy it a collar and leash so you don't lose sight of your pet! The set is made of high-quality, strong, but soft material that will not harm the animal.",
  },
  {
    id: "5",
    link: "#",
    image: "img/agamiceset.png",
    title: "AGA Mice Set",
    price: "$3,00",
    description:
      "This set of 3 colorful mice will entertain your cat for a long time. They are made of durable wool and feel very similar to real mice. Inside each mouse, there is a bell that attracts your pet's attention.",
  },
  {
    id: "6",
    link: "#",
    image: "img/agaretractableleash.png",
    title: "AGA Retractable Leash",
    price: "$33,00",
    description:
      "This leash is a great choice dogs of medium size. It gives them freedom of movement but, at the same time, will help you stop your pet from running too away from you.",
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
    id: "8",
    link: "#",
    image: "img/doggytwobunchtoy.png",
    title: "DOGGY 2-Bunch Toy",
    price: "$5,00",
    description:
      "Does your dog like to chew and pull on a toy? It will love this little thing! The toy consists of a plastic ring and two thick rope tassels for your active games.",
  },
  {
    id: "9",
    link: "#",
    image: "img/doggyfunset.png",
    title: "DOGGY Fun Set",
    price: "$6,00",
    description:
      "This is the perfect set to play with your dog! It includes a safety glove, a strong braided rope, and a toy that is so cool to bite and pull!",
  },
  {
    id: "10",
    link: "#",
    image: "img/dorahangingmirror.png",
    title: "DORA Hanging Mirror",
    price: "$14,00",
    description:
      "We do not know why birds love to look in the mirror so much, but we do know that a mirror from the DORA brand is a great gift for your pet. It is really easy to hang it in the cage to the delight of your small friend.",
  },
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
    id: "12",
    link: "dora-pet-carrier.html",
    image: "img/dorapetcarrier.png",
    title: "DORA Pet Carrier",
    price: "$23,00",
    description:
      "Do you need to go somewhere with your pet? This carrier is perfect for this. It allows enough air to pass through thanks to the grate and allows the pet to see what is happening around.",
  },
  {
    id: "13",
    link: "#",
    image: "img/dorarabbitbrush.png",
    title: "DORA Rabbit Brush",
    price: "10,00",
    description:
      "Maintain your pet's coat in perfect condition with this brush. It will help get rid of tangles and shedding hair without causing discomfort to the rabbit.",
  },
  {
    id: "14",
    link: "#",
    image: "img/dorawoodswing.png",
    title: "DORA Wood Swing",
    price: "$7,00",
    description:
      "Provide your parrot with a place to perch and swing! This swing is easily attached to the inside of the cage and swings back and forth freely.",
  },
  {
    id: "15",
    link: "#",
    image: "img/duccaairpump.png",
    title: "DUCCA Air Pump",
    price: "$2,00",
    description:
      "The DUCCA air pump provides aeration for rich, oxygenated water. It operates really quietly and without vibrations, so you won't be disturbed even if the aquarium is in your bedroom.",
  },
  {
    id: "16",
    link: "#",
    image: "img/dunagraybed.png",
    title: "DUNA Gray Bed",
    price: "$25,00",
    description:
      "Does your cat dislike beds and prefer to sleep on your face? You just haven't tried DUNA beds! They are so comfortable and soft that your cat will definitely appreciate them.",
  },
  {
    id: "17",
    link: "#",
    image: "img/agabowlforhamsters.png",
    title: "DUNA Pillow Bed",
    price: "$10,00",
    description:
      "Present your pup a totally comfortable bed! It is super soft yet easy to clean. The pillow is lightweight, so you can move it to any room or take it with your when traveling.",
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
    id: "19",
    link: "#",
    image: "img/egobutterflytoy.png",
    title: "EGO Butterfly Toy",
    price: "$8,00",
    description:
      "This toy will entertain your cat for a long time. The butterfly is attached to the base with a spring and will swing in all directions, attracting the attention of your pet.",
  },
  {
    id: "20",
    link: "#",
    image: "img/harnorabbitcage.png",
    title: "HARNO Rabbit Cage",
    price: "$60,00",
    description:
      "A middle-sized cage for your pet. Created for easy access and interaction, this cage features simple, no-tool assembly. Make the new home of your rabbit even more comfy!",
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
    id: "23",
    link: "#",
    image: "img/optyplasticbowl.png",
    title: "OPTY Plastic Bowl",
    price: "$3,00",
    description:
      "This is a simple and safe bowl for your animal to use for both food and water. The bowl is made of high-quality plastic.",
  },
  {
    id: "24",
    link: "#",
    image: "img/optywoodenstand.png",
    title: "OPTY Wooden Stand",
    price: "$13,00",
    description:
      "This ladder stand is made of wood and is sure to please your pets. The stand is suitable for large cages and is designed for 3-4 birds.",
  },
  {
    id: "25",
    link: "#",
    image: "img/serapurplecollar.png",
    title: "SERA Purple Collar",
    price: "$2,00",
    description:
      "Nice and comfortable collar for your rabbit made of soft braided material. You will love its rich color, and your pet will appreciate the ringing ball on the collar.",
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
    id: "27",
    link: "#",
    image: "img/stercorainbowballs.png",
    title: "STERCO Rainbow Balls",
    price: "$3,50",
    description:
      "Great balls to awake the natural instinct to chew in your hamster, rat, or guinea pig. The balls are long-lasting and made of safe materials (willow twigs inside).",
  },
  {
    id: "28",
    link: "#",
    image: "img/tiscofiftyliteraquarium.png",
    title: "TISCO 50 Liter Aquarium",
    price: "$70,00",
    description:
      "Looking for a new home for your fish? This aquarium may be the right choice for you. It features a medium size perfect for any room.",
  },
  {
    id: "29",
    link: "#",
    image: "img/tiscolandingnet.png",
    title: "TISCO Landing Net",
    price: "$4,00",
    description:
      "This net is indispensable when you need to clean your aquarium. This accessory from a reliable manufacturer will serve you for a really long time.",
  },
  {
    id: "30",
    link: "#",
    image: "img/tiscotoywheel.png",
    title: "TISCO Toy Wheel",
    price: "$9,00",
    description:
      "Hamsters and guinea pigs love to run in the wheel! Not sure? Buy and see for yourself! Give your pet their favorite wheel for crazy runs.",
  },
  {
    id: "31",
    link: "#",
    image: "img/vegafishcastle.png",
    title: "VEGA Fish Castle",
    price: "$6,00",
    description:
      "Aquarium decoration in the form of a real castle will delight your eyes, surprise guests, and serve as additional entertainment for your fish.",
  },
  {
    id: "32",
    link: "#",
    image: "img/vetrahangingnest.png",
    title: "VETRA Hanging Nest",
    price: "$8,00",
    description:
      "Sometimes you really want to hide from everyone! Thanks to this hanging nest, your parrot will have enough privacy.",
  },
  {
    id: "33",
    link: "#",
    image: "img/vitalifetwobowlset.png",
    title: "VITALIFE 2-Bowls Set",
    price: "$9,00",
    description:
      "These two ceramic bowls on a metal stand will fit perfectly into your decor and are completely pet-safe. Your cat will look forward to be fed!",
  },
  {
    id: "34",
    link: "#",
    image: "img/vitalifecrunchstickstreat.png",
    title: "VITALIFE Crunch Sticks Treat",
    price: "$5,00",
    description:
      "Treat your hamster or rabbit to a crunchy baked treat stick. It is made with seeds, whole grains, vitamins, and extra calcium. Support your pet's healthy teeth!",
  },
];

function renderProducts(products) {
  let productsDomString = "";
  for (const product of products) {
    productsDomString += `
        <article class="prodlist-item">
          <a href="item-card-page.html" class="prodlist-item-link" data-id="${product.id}">
            <img src="${product.image}" alt="${product.title}" class="prodlist-item-img" />
            <p class="prodlist-item-name">${product.title}</p>
          </a>
          <p class="prodlist-item-price">${product.price}</p>
          <button class="prodlist-item-buybtn btn-buy" data-id="${product.id}">Buy</button>
        </article>
      `;
  }
  document.querySelector(".prodlist").innerHTML = productsDomString;

  document.querySelectorAll(".prodlist-item-link").forEach((item) => {
    item.addEventListener("click", (e) => {
      const productId = e.currentTarget.dataset.id;
      const product = products.find((p) => p.id === productId);
      localStorage.setItem("selectedProduct", JSON.stringify(product));
    });
  });
}

renderProducts(products);

document.querySelector(
  ".storehomepage__title--store"
).innerHTML += ` (${products.length})`;
document.querySelector(
  ".storehomepage__title--products"
).innerHTML += ` (${products.length})`;

const selectProdPerPage = document.querySelector(".navprodperpage-select");

let displayProdPerPage =
  selectProdPerPage.options[selectProdPerPage.selectedIndex].value;
let displayProductsStartingFrom = 0;
let displayPage = 1;

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("limit")) {
  displayProdPerPage = urlParams.get("limit");
  if (urlParams.has("page")) {
    displayPage = urlParams.get("page");
    displayProductsStartingFrom = (displayPage - 1) * displayProdPerPage;
  }
}

function renderPageBtns(pgs) {
  let pageBtnDomString = "";
  const pgLimit = 3;
  let startAt = Math.floor(displayPage / pgLimit) + 1;
  for (let i = startAt; i <= pgLimit + startAt && i <= pgs; i++) {
    pageBtnDomString += `
      <button class="pagenav-num" id="page_btn_${i}">${i}</button>
    `;
  }
  document
    .querySelector(".pagenav-prev")
    .insertAdjacentHTML("afterend", pageBtnDomString);
}

renderProducts(
  products.slice(
    displayProductsStartingFrom,
    displayProductsStartingFrom + displayProdPerPage
  )
);
const numOfPages = Math.ceil(products.length / displayProdPerPage);
renderPageBtns(numOfPages);

pageBtn = document.querySelector(`#page_btn_${displayPage}`);
pageBtn.setAttribute("disabled", "");

nextPageBtn = document.querySelector("#next_btn");
prevPageBtn = document.querySelector("#prev_btn");

if (Number(displayPage) === numOfPages && Number(displayPage) === 1) {
  nextPageBtn.setAttribute("disabled", "");
  prevPageBtn.setAttribute("disabled", "");
} else if (Number(displayPage) === numOfPages) {
  nextPageBtn.setAttribute("disabled", "");
} else if (Number(displayPage) === 1) {
  prevPageBtn.setAttribute("disabled", "");
}

for (const option of selectProdPerPage.options) {
  option.selected = option.value === displayProdPerPage ? true : false;
}

selectProdPerPage.addEventListener("change", (event) => {
  displayProdPerPage = event.target.value;
  renderProducts(
    products.slice(
      displayProductsStartingFrom,
      displayProductsStartingFrom + displayProdPerPage
    )
  );
  if (window.location.pathname.endsWith("/storehomepage")) {
    window.location.search = `?limit=${displayProdPerPage}`;
  }
  if (window.location.pathname.endsWith("/storehomepage&page=")) {
    window.location.search = `?limit=${displayProdPerPage}`;
  }
});

const goToPage = document.querySelector(".pagenav");

goToPage.addEventListener("click", (event) => {
  let btnClicked = event.target.getAttribute("id");

  switch (btnClicked) {
    case "prev_btn":
      displayPage--;
      break;
    case "next_btn":
      displayPage++;
      break;
    default:
      displayPage = /\d+/.exec(btnClicked);
  }

  if (window.location.pathname.endsWith("/storehomepage")) {
    window.location.search = `?limit=${displayProdPerPage}&page=${displayPage}`;
  }
});

document.querySelectorAll(".btn-buy").forEach((btn) => {
  btn.addEventListener("click", this.addProductToCartSimulator.bind(this));
});

function addProductToCartSimulator(event) {
  const id = event.target.dataset.id;
  let count = Number(document.getElementById("cartCount").textContent);
  const cartTab = document.querySelector(".cart-tab");
  const imageToVibrate = document.querySelector(".cart-anim");

  let prod = products.find((product) => product.id === id);

  const defaultEl = document.querySelector(".def-el-in-cart");
  if (defaultEl) {
    defaultEl.remove();
  }

  document.querySelector(".order-total-price").textContent = 0;

  document.getElementById("cartCount").textContent = count;

  cartTab.style.display = "block";

  function vibrateOnce() {
    imageToVibrate.classList.remove("cart-anim");
    void imageToVibrate.offsetWidth;
    imageToVibrate.classList.add("cart-anim");
  }

  let checkIfProductInCart = document.getElementById(`${prod.id}`);

  if (!checkIfProductInCart) {
    document.getElementById("cartCount").textContent = Number(count) + 1;
    insertProductsToCart(prod);
  } else {
    vibrateOnce();
    const currProd = document.getElementById(`${prod.id}`);
    const currProdAmountInp = currProd.querySelector(
      ".purchase__quantity-input-modal"
    );
    const currAmount = currProdAmountInp.value;
    currProd.querySelector(".purchase__quantity-input-modal").value =
      Number(currAmount) + 1;
  }

  getTotalPrice();

  const cartIcon = document.querySelector(".cart-icon");
  cartIcon.addEventListener("click", function () {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = "block";
  });

  const closeCart = document.querySelector(".close-modal");
  closeCart.addEventListener("click", function () {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = "none";
  });

  function insertProductsToCart(product) {
    let cartProdsDomString = "";
    cartProdsDomString += `
    <div class="cart-tab__order-details-inner" id=${product.id}>
      <div class="cart-tab__order-details-inner-img">
      <img
        class="order-details-img"
        src=${product.image}
        alt="product img"
      />
      </div>
      <div class="cart-tab__order-details-inner-name">
        <a class="order-details-name" href="#">${product.title}</a>
      </div>
      <div class="details__purchase">
        <div class="details__purchase-inner-modal">
          <input
            type="number"
            class="purchase__quantity-input-modal"
            value="1"
            data-test="quantity-input"
          />
          <div class="purchase__quantity-buttons-modal">
            <img
              class="button-up-modal"
              src="img/button-up.svg"
              alt="Button Up"
            />
            <img
              class="button-down-modal"
              src="img/button-down.svg"
              alt="Button Down"
            />
          </div>
        </div>
      </div>
      <div class="cart-tab__order-details-price">
        <p class="order-details-price">${product.price}</p>
      </div>
      <div class="cart-tab__order-details-delete-item">
        <img
          class="order-details-delete-icon"
          src="img/delete-icon.svg"
          alt="delete-icon"
        />
      </div>
    </div>
  </div>
        `;
    document
      .querySelector(".cart-tab__order-total-price")
      .insertAdjacentHTML("beforebegin", cartProdsDomString);
  }
}

function getTotalPrice() {
  const prodsInCart = document.querySelectorAll(
    ".cart-tab__order-details-inner"
  );
  let totalPrice = 0;

  prodsInCart.forEach(function (product) {
    const prodPrice = product
      .querySelector(".order-details-price")
      .textContent.replace("$", "")
      .replace(",", ".");
    const prodAmount = product.querySelector(".purchase__quantity-input-modal").value;

    totalPrice += Number(prodPrice) * prodAmount;
  });

  document.querySelector(".order-total-price").textContent =
    "$" + totalPrice.toFixed(2);
}
