document.addEventListener("partialsLoaded", () => {
  //
  const products = [
    {
      id: "1",
      link: "#",
      image: "img/agabowlforhamsters.png",
      title: "AGA Bowl for Hamsters",
      price: "$2,00",
    },
    {
      id: "2",
      link: "#",
      image: "img/agaclinkingtoy.png",
      title: "AGA Clinking Toy",
      price: "$2,00",
    },
    {
      id: "3",
      link: "#",
      image: "img/agagreencage.png",
      title: "AGA Green Cage",
      price: "$25,00",
    },
    {
      id: "4",
      link: "#",
      image: "img/agaleashandcollar.png",
      title: "AGA Leash & Collar",
      price: "$13,00",
    },
    {
      id: "5",
      link: "#",
      image: "img/agamiceset.png",
      title: "AGA Mice Set",
      price: "$3,00",
    },
    {
      id: "6",
      link: "#",
      image: "img/agaretractableleash.png",
      title: "AGA Retractable Leash",
      price: "$33,00",
    },
    {
      id: "7",
      link: "aga-rope-toy.html",
      image: "img/agaropetoy.png",
      title: "AGA Rope Toy",
      price: "$5,00",
    },
    {
      id: "8",
      link: "#",
      image: "img/doggytwobunchtoy.png",
      title: "DOGGY 2-Bunch Toy",
      price: "$5,00",
    },
    {
      id: "9",
      link: "#",
      image: "img/doggyfunset.png",
      title: "DOGGY Fun Set",
      price: "$6,00",
    },
    {
      id: "10",
      link: "#",
      image: "img/dorahangingmirror.png",
      title: "DORA Hanging Mirror",
      price: "$14,00",
    },
    {
      id: "11",
      link: "dora-metal-pet-brush.html",
      image: "img/dorametalpetbrush.png",
      title: "DORA Metal Pet Brush",
      price: "$15,00",
    },
    {
      id: "12",
      link: "dora-pet-carrier.html",
      image: "img/dorapetcarrier.png",
      title: "DORA Pet Carrier",
      price: "$23,00",
    },
    {
      id: "13",
      link: "#",
      image: "img/dorarabbitbrush.png",
      title: "DORA Rabbit Brush",
      price: "10,00",
    },
    {
      id: "14",
      link: "#",
      image: "img/dorawoodswing.png",
      title: "DORA Wood Swing",
      price: "$7,00",
    },
    {
      id: "15",
      link: "#",
      image: "img/duccaairpump.png",
      title: "DUCCA Air Pump",
      price: "$2,00",
    },
    {
      id: "16",
      link: "#",
      image: "img/dunagraybed.png",
      title: "DUNA Gray Bed",
      price: "$25,00",
    },
    {
      id: "17",
      link: "#",
      image: "img/agabowlforhamsters.png",
      title: "DUNA Pillow Bed",
      price: "$10,00",
    },
    {
      id: "18",
      link: "#",
      image: "img/dunawoventoy.png",
      title: "DUNA Woven Toy",
      price: "$1,50",
    },
    {
      id: "19",
      link: "#",
      image: "img/egobutterflytoy.png",
      title: "EGO Butterfly Toy",
      price: "$8,00",
    },
    {
      id: "20",
      link: "#",
      image: "img/harnorabbitcage.png",
      title: "HARNO Rabbit Cage",
      price: "$60,00",
    },
    {
      id: "21",
      link: "kittens-heaven-set.html",
      image: "img/kittensheavenset.png",
      title: "Kitten's Heaven Set",
      price: "$12,00",
    },
    {
      id: "22",
      link: "opty-pet-carrier.html",
      image: "img/optypetcarrier.png",
      title: "OPTY Pet Carrier",
      price: "$8,00",
    },
    {
      id: "23",
      link: "#",
      image: "img/optyplasticbowl.png",
      title: "OPTY Plastic Bowl",
      price: "$3,00",
    },
    {
      id: "24",
      link: "#",
      image: "img/optywoodenstand.png",
      title: "OPTY Wooden Stand",
      price: "$13,00",
    },
    {
      id: "25",
      link: "#",
      image: "img/serapurplecollar.png",
      title: "SERA Purple Collar",
      price: "$2,00",
    },
    {
      id: "26",
      link: "#",
      image: "img/serawovenleash.png",
      title: "SERA Woven Leash",
      price: "$2,00",
    },
    {
      id: "27",
      link: "#",
      image: "img/stercorainbowballs.png",
      title: "STERCO Rainbow Balls",
      price: "$3,50",
    },
    {
      id: "28",
      link: "#",
      image: "img/tiscofiftyliteraquarium.png",
      title: "TISCO 50 Liter Aquarium",
      price: "$70,00",
    },
    {
      id: "29",
      link: "#",
      image: "img/tiscolandingnet.png",
      title: "TISCO Landing Net",
      price: "$4,00",
    },
    {
      id: "30",
      link: "#",
      image: "img/tiscotoywheel.png",
      title: "TISCO Toy Wheel",
      price: "$9,00",
    },
    {
      id: "31",
      link: "#",
      image: "img/vegafishcastle.png",
      title: "VEGA Fish Castle",
      price: "$6,00",
    },
    {
      id: "32",
      link: "#",
      image: "img/vetrahangingnest.png",
      title: "VETRA Hanging Nest",
      price: "$8,00",
    },
    {
      id: "33",
      link: "#",
      image: "img/vitalifetwobowlset.png",
      title: "VITALIFE 2-Bowls Set",
      price: "$9,00",
    },
    {
      id: "34",
      link: "#",
      image: "img/vitalifecrunchstickstreat.png",
      title: "VITALIFE Crunch Sticks Treat",
      price: "$5,00",
    },
  ];

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");

  if (productId) {
    loadProductDetails(productId);
  }

  function loadProductDetails(productId) {
    const product = products.find((product) => product.id === productId);
    if (!product) {
      console.error("Product not found");
      return;
    }

    document.querySelector(".image-product").src = product.image;
    document.querySelector(".image-product").alt = product.title;
    document.querySelector(".details__title").textContent = product.title;
    document.querySelector(".details__price").textContent = product.price;
    // Обновляем описание, если есть соответствующий элемент.
    if (document.querySelector(".description__text")) {
      document.querySelector(
        ".description__text"
      ).textContent = `Description for ${product.title}`;
    }
  }
  //

  const quantityInput = document.querySelector(".purchase__quantity-input");
  const buttonUp = document.querySelector(".button-up");
  const buttonDown = document.querySelector(".button-down");
  const buyButton = document.getElementById("buyButton");
  const cartTab = document.querySelector(".cart-tab");
  const imageToVibrate = document.querySelector(".cart-anim");
  const cartModal = document.querySelector(".modal");
  let count = 0;

  buttonUp.addEventListener("click", function () {
    quantityInput.value = parseInt(quantityInput.value, 10) + 1;
  });

  buttonDown.addEventListener("click", function () {
    if (quantityInput.value > 0) {
      quantityInput.value = parseInt(quantityInput.value, 10) - 1;
    }
  });

  buyButton.addEventListener("click", function () {
    let quantityToAdd = parseInt(quantityInput.value, 10);
    count += quantityToAdd;
    document.getElementById("cartCount").textContent = count;
    cartTab.style.display = "block";
    imageToVibrate.classList.add("cart-anim");

    imageToVibrate.addEventListener("animationend", function () {
      imageToVibrate.classList.remove("vibrating-image");
    });

    const cartIcon = document.querySelector(".cart-tab__icon");
    cartIcon.addEventListener("click", function () {
      cartModal.style.display = "block";
    });

    const closeButton = document.querySelector(".close-modal");
    closeButton.addEventListener("click", function () {
      cartModal.style.display = "none";
    });
  });

  window.onclick = function (event) {
    if (event.target === cartModal) {
      cartModal.style.display = "none";
    }
  };

  const quantityInputModal = document.querySelector(
    ".purchase__quantity-input-modal"
  );
  const buttonUpModal = document.querySelector(".button-up-modal");
  const buttonDownModal = document.querySelector(".button-down-modal");

  buttonUpModal.addEventListener("click", function () {
    quantityInputModal.value = parseInt(quantityInputModal.value, 10) + 1;
  });

  buttonDownModal.addEventListener("click", function () {
    if (quantityInputModal.value > 0) {
      quantityInputModal.value = parseInt(quantityInputModal.value, 10) - 1;
    }
  });

  const clearQuantity = document.querySelector(
    ".cart-tab__order-details-delete-item"
  );

  clearQuantity.addEventListener("click", function () {
    quantityInputModal.value = 0;
  });
});
