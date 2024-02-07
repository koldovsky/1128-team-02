document.addEventListener("partialsLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");

  if (productId) {
    showProductInfo(productId);
  }

  function showProductInfo() {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    if (!product) return;

    document.querySelector(".image-product").src = product.image;
    document.querySelector(".image-product").alt = product.title;
    document.querySelector(".details__title").textContent = product.title;
    document.querySelector(".details__code").textContent =
      "Product code " + product.id;
    document.querySelector(".details__price").textContent = product.price;
    document.querySelector(".description__text").textContent =
      product.description;
    document.querySelector(".card-item__thumbnail-img").src = product.image;
    document.querySelector(".card-item__thumbnail-img").alt = product.title;
  }

  showProductInfo();

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
