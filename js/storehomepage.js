document.addEventListener("partialsLoaded", () => {
  import ('./cart-modal.js');
  
  // import('./burger-menu.js');
});

const products = [
    {
        "id":"1",
        "link":"#",
        "image":"img/agabowlforhamsters.png",
        "title":"AGA Bowl for Hamsters",
        "price":"$2,00"
    },
    {
        "id":"2",
        "link":"#",
        "image":"img/agaclinkingtoy.png",
        "title":"AGA Clinking Toy",
        "price":"$2,00"
    },
    {
        "id":"3",
        "link":"#",
        "image":"img/agagreencage.png",
        "title":"AGA Green Cage",
        "price":"$25,00"
    },
    {
        "id":"4",
        "link":"#",
        "image":"img/agaleashandcollar.png",
        "title":"AGA Leash & Collar",
        "price":"$13,00"
    },
    {
        "id":"5",
        "link":"#",
        "image":"img/agamiceset.png",
        "title":"AGA Mice Set",
        "price":"$3,00"
    },
    {
        "id":"6",
        "link":"#",
        "image":"img/agaretractableleash.png",
        "title":"AGA Retractable Leash",
        "price":"$33,00"
    },
    {
        "id":"7",
        "link":"aga-rope-toy.html",
        "image":"img/agaropetoy.png",
        "title":"AGA Rope Toy",
        "price":"$5,00"
    },
    {
        "id":"8",
        "link":"#",
        "image":"img/doggytwobunchtoy.png",
        "title":"DOGGY 2-Bunch Toy",
        "price":"$5,00"
    },
    {
        "id":"9",
        "link":"#",
        "image":"img/doggyfunset.png",
        "title":"DOGGY Fun Set",
        "price":"$6,00"
    },
    {
        "id":"10",
        "link":"#",
        "image":"img/dorahangingmirror.png",
        "title":"DORA Hanging Mirror",
        "price":"$14,00"
    },
    {
        "id":"11",
        "link":"dora-metal-pet-brush.html",
        "image":"img/dorametalpetbrush.png",
        "title":"DORA Metal Pet Brush",
        "price":"$15,00"
    },
    {
        "id":"12",
        "link":"dora-pet-carrier.html",
        "image":"img/dorapetcarrier.png",
        "title":"DORA Pet Carrier",
        "price":"$23,00"
    },
    {
        "id":"13",
        "link":"#",
        "image":"img/dorarabbitbrush.png",
        "title":"DORA Rabbit Brush",
        "price":"10,00"
    },
    {
        "id":"14",
        "link":"#",
        "image":"img/dorawoodswing.png",
        "title":"DORA Wood Swing",
        "price":"$7,00"
    },
    {
        "id":"15",
        "link":"#",
        "image":"img/duccaairpump.png",
        "title":"DUCCA Air Pump",
        "price":"$2,00"
    },
    {
        "id":"16",
        "link":"#",
        "image":"img/dunagraybed.png",
        "title":"DUNA Gray Bed",
        "price":"$25,00"
    },
    {
        "id":"17",
        "link":"#",
        "image":"img/agabowlforhamsters.png",
        "title":"DUNA Pillow Bed",
        "price":"$10,00"
    },
    {
        "id":"18",
        "link":"#",
        "image":"img/dunawoventoy.png",
        "title":"DUNA Woven Toy",
        "price":"$1,50"
    },
    {
        "id":"19",
        "link":"#",
        "image":"img/egobutterflytoy.png",
        "title":"EGO Butterfly Toy",
        "price":"$8,00"
    },
    {
        "id":"20",
        "link":"#",
        "image":"img/harnorabbitcage.png",
        "title":"HARNO Rabbit Cage",
        "price":"$60,00"
    },
    {
        "id":"21",
        "link":"kittens-heaven-set.html",
        "image":"img/kittensheavenset.png",
        "title":"Kitten's Heaven Set",
        "price":"$12,00"
    },
    {
        "id":"22",
        "link":"opty-pet-carrier.html",
        "image":"img/optypetcarrier.png",
        "title":"OPTY Pet Carrier",
        "price":"$8,00"
    },
    {
        "id":"23",
        "link":"#",
        "image":"img/optyplasticbowl.png",
        "title":"OPTY Plastic Bowl",
        "price":"$3,00"
    },
    {
        "id":"24",
        "link":"#",
        "image":"img/optywoodenstand.png",
        "title":"OPTY Wooden Stand",
        "price":"$13,00"
    },
    {
        "id":"25",
        "link":"#",
        "image":"img/serapurplecollar.png",
        "title":"SERA Purple Collar",
        "price":"$2,00"
    },
    {
        "id":"26",
        "link":"#",
        "image":"img/serawovenleash.png",
        "title":"SERA Woven Leash",
        "price":"$2,00"
    },
    {
        "id":"27",
        "link":"#",
        "image":"img/stercorainbowballs.png",
        "title":"STERCO Rainbow Balls",
        "price":"$3,50"
    },
    {
        "id":"28",
        "link":"#",
        "image":"img/tiscofiftyliteraquarium.png",
        "title":"TISCO 50 Liter Aquarium",
        "price":"$70,00"
    },
    {
        "id":"29",
        "link":"#",
        "image":"img/tiscolandingnet.png",
        "title":"TISCO Landing Net",
        "price":"$4,00"
    },
    {
        "id":"30",
        "link":"#",
        "image":"img/tiscotoywheel.png",
        "title":"TISCO Toy Wheel",
        "price":"$9,00"
    },
    {
        "id":"31",
        "link":"#",
        "image":"img/vegafishcastle.png",
        "title":"VEGA Fish Castle",
        "price":"$6,00"
    },
    {
        "id":"32",
        "link":"#",
        "image":"img/vetrahangingnest.png",
        "title":"VETRA Hanging Nest",
        "price":"$8,00"
    },
    {
        "id":"33",
        "link":"#",
        "image":"img/vitalifetwobowlset.png",
        "title":"VITALIFE 2-Bowls Set",
        "price":"$9,00"
    },
    {
        "id":"34",
        "link":"#",
        "image":"img/vitalifecrunchstickstreat.png",
        "title":"VITALIFE Crunch Sticks Treat",
        "price":"$5,00"
    }
]

function renderProducts(products) {
  let productsDomString = "";
  for (const product of products) {
    productsDomString += `
      <article class="prodlist-item">
        <a href="${product.link}">
          <img
            src="${product.image}"
            alt="${product.title}"
            class="prodlist-item-img"
          />
        </a>
        <a href="${product.link}">
          <p class="prodlist-item-name">${product.title}</p>
        </a>
        <p class="prodlist-item-price">${product.price}</p>
        <button class="prodlist-item-buybtn btn-buy" data-id=${product.id}>Buy</button>
      </article>
    `
  }
  document.querySelector(".prodlist").innerHTML = productsDomString;
}

document.querySelector(".storehomepage__title--store").innerHTML += ` (${products.length})`;
document.querySelector(".storehomepage__title--products").innerHTML += ` (${products.length})`;

const selectProdPerPage = document.querySelector('.navprodperpage-select');

let displayProdPerPage = selectProdPerPage.options[selectProdPerPage.selectedIndex].value;
let displayProductsStartingFrom = 0;
let displayPage = 1;

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('limit')) {
    displayProdPerPage = urlParams.get('limit')
    if (urlParams.has('page')) {
      displayPage = urlParams.get('page');
      displayProductsStartingFrom = (displayPage - 1) * displayProdPerPage;
    };
} 

function renderPageBtns(pgs) {
  let pageBtnDomString = "";
  const pgLimit = 3;
  let startAt =  Math.floor(displayPage / pgLimit) + 1
  for (let i = startAt;  i <= pgLimit + startAt && i <= pgs; i++) {
    pageBtnDomString += `
      <button class="pagenav-num" id="page_btn_${i}">${i}</button>
    `;
  }
  document.querySelector(".pagenav-prev").insertAdjacentHTML('afterend', pageBtnDomString);
}

renderProducts(products.slice(displayProductsStartingFrom, displayProductsStartingFrom + displayProdPerPage));
const numOfPages = Math.ceil(products.length / displayProdPerPage);
renderPageBtns(numOfPages)

pageBtn = document.querySelector(`#page_btn_${displayPage}`);
pageBtn.setAttribute('disabled', '');

nextPageBtn = document.querySelector("#next_btn");
prevPageBtn = document.querySelector('#prev_btn');


if(Number(displayPage) === numOfPages && Number(displayPage) === 1) {
  nextPageBtn.setAttribute('disabled', '');
  prevPageBtn.setAttribute('disabled', '');
} else if (Number(displayPage) === numOfPages) {
  nextPageBtn.setAttribute('disabled', '')
} else if (Number(displayPage) === 1) {
  prevPageBtn.setAttribute('disabled', '')
}


for (const option of selectProdPerPage.options) {
  option.selected = (option.value === displayProdPerPage) ? true : false;
};

selectProdPerPage.addEventListener('change', (event) => {
    displayProdPerPage = event.target.value;
    renderProducts(products.slice(displayProductsStartingFrom, displayProductsStartingFrom + displayProdPerPage));
    if (window.location.pathname.endsWith('/storehomepage')) {
      window.location.search = `?limit=${displayProdPerPage}`
    }
    if (window.location.pathname.endsWith('/storehomepage&page=')) {
      window.location.search = `?limit=${displayProdPerPage}`
    }
});

const goToPage = document.querySelector('.pagenav');

goToPage.addEventListener('click', (event) => {

  let btnClicked = event.target.getAttribute("id");

  switch (btnClicked) {
    case 'prev_btn':
      displayPage--;
      break;
    case 'next_btn': 
      displayPage++;
      break;
    default:
      displayPage = /\d+/.exec(btnClicked);
  }

  if (window.location.pathname.endsWith('/storehomepage')) {
    window.location.search = `?limit=${displayProdPerPage}&page=${displayPage}`
  }

});


document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', this.addProductToCartSimulator.bind(this))
})


function addProductToCartSimulator(event) {
  const id = event.target.dataset.id;
  let count = Number(document.getElementById("cartCount").textContent)
  const cartTab = document.querySelector(".cart-tab");
  const imageToVibrate = document.querySelector(".cart-anim");

  let prod = products.find(product => product.id === id)

  const defaultEl = document.querySelector('.def-el-in-cart')
  if (defaultEl) {defaultEl.remove()};
  
  document.querySelector(".order-total-price").textContent = 0;
 
  document.getElementById("cartCount").textContent = count;
  
  cartTab.style.display = "block";

  function vibrateOnce() {
    imageToVibrate.classList.remove('cart-anim');
    void imageToVibrate.offsetWidth;
    imageToVibrate.classList.add('cart-anim');
  }
  
  let checkIfProductInCart = document.getElementById(`${prod.id}`);

  if  (!checkIfProductInCart) {
    document.getElementById("cartCount").textContent = Number(count) + 1;
    insertProductsToCart(prod)
  } else {
    vibrateOnce()
    const currProd = document.getElementById(`${prod.id}`);
    const currProdAmountInp = currProd.querySelector('.purchase__quantity-input-modal');
    const currAmount = currProdAmountInp.value
    currProd.querySelector('.purchase__quantity-input-modal').value = Number(currAmount) + 1
  }
  
  getTotalPrice()

  const cartIcon = document.querySelector(".cart-icon");
  cartIcon.addEventListener("click", function(){
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = "block";
  });

  const closeCart = document.querySelector(".close-modal");
  closeCart.addEventListener("click", function() {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = "none";
  })

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
    document.querySelector(".cart-tab__order-total-price").insertAdjacentHTML('beforebegin', cartProdsDomString);
  }
}

function getTotalPrice() {
  const prodsInCart = document.querySelectorAll('.cart-tab__order-details-inner');
  let totalPrice = 0;

  prodsInCart.forEach( function(product) {
    const prodPrice = product.querySelector('.order-details-price').textContent.replace('$','').replace(',','.');
    const prodAmount = product.querySelector('.purchase__quantity-input-modal').value

    totalPrice += Number(prodPrice) * prodAmount;
  })

  document.querySelector(".order-total-price").textContent = '$' + totalPrice.toFixed(2).replace('.', ',');
}