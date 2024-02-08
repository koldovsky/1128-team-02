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

  buttonUp.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value, 10) + 1;
  });

  buttonDown.addEventListener("click", () => {
    if (quantityInput.value > 0) {
      quantityInput.value = parseInt(quantityInput.value, 10) - 1;
    }
  });

  // Код модального вікна:

  const buyButton = document.getElementById("buyButton");
  const cartTab = document.querySelector(".cart-tab");
  const imageToVibrate = document.querySelector(".cart-anim");
  const cartModal = document.querySelector(".modal");
  let count = 0;

  function showProductInfoModal() {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    if (!product) return;

    document.querySelector(".order-details-img").src = product.image;
    document.querySelector(".order-details-img").alt = product.title;
    document.querySelector(".order-details-name").textContent = product.title;
    document.querySelector(".order-details-price").textContent = product.price;
    document.querySelector(".order-total-price").textContent = product.price;
  }

  showProductInfoModal();

  function updateTotalPrice() {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    if (!product) return;

    const priceAsString = product.price.replace(/[^0-9.-]+/g, "");
    const pricePerUnit = parseFloat(priceAsString);

    if (isNaN(pricePerUnit)) {
      console.error("Cannot parse product price as a number:", product.price);
      return;
    }

    const quantity = parseInt(
      document.querySelector(".purchase__quantity-input-modal").value,
      10
    );

    if (!isNaN(quantity) && quantity >= 0) {
      const totalPrice = quantity > 0 ? pricePerUnit * quantity : 0;
      document.querySelector(
        ".order-total-price"
      ).textContent = `$${totalPrice.toFixed(2)}`;
    } else {
      console.error("Quantity is not a valid number:", quantity);
    }

    const totalPrice = (pricePerUnit * quantity) / 100;
    document.querySelector(
      ".order-total-price"
    ).textContent = `$${totalPrice.toFixed(2)}`;
  }

  buyButton.addEventListener("click", () => {
    quantityToAdd = parseInt(quantityInput.value, 10);
    count += quantityToAdd;
    document.getElementById("cartCount").textContent = count;
    cartTab.style.display = "block";
    imageToVibrate.classList.add("cart-anim");

    imageToVibrate.addEventListener("animationend", () => {
      imageToVibrate.classList.remove("vibrating-image");
    });

    const cartIcon = document.querySelector(".cart-tab__icon");
    cartIcon.addEventListener("click", () => {
      cartModal.style.display = "block";
      quantityInputModal.value = quantityToAdd;
      updateTotalPrice();
    });

    const closeButton = document.querySelector(".close-modal");
    closeButton.addEventListener("click", () => {
      cartModal.style.display = "none";
      quantityToAdd = parseInt(quantityInputModal.value, 10);
      count = quantityToAdd;
      document.getElementById("cartCount").textContent = count;
      if (count === 0) {
        cartTab.style.display = "none";
      }
    });
  });

  window.onclick = function (event) {
    if (event.target === cartModal) {
      cartModal.style.display = "none";
    }
  };

  const pushNameLink = document.querySelector(".order-details-name");
  pushNameLink.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  const quantityInputModal = document.querySelector(
    ".purchase__quantity-input-modal"
  );
  const buttonUpModal = document.querySelector(".button-up-modal");
  const buttonDownModal = document.querySelector(".button-down-modal");

  buttonUpModal.addEventListener("click", () => {
    quantityInputModal.value = parseInt(quantityInputModal.value, 10) + 1;
    updateTotalPrice();
  });

  buttonDownModal.addEventListener("click", () => {
    if (quantityInputModal.value > 0) {
      quantityInputModal.value = parseInt(quantityInputModal.value, 10) - 1;
      updateTotalPrice();
    }
  });

  const clearQuantity = document.querySelector(
    ".cart-tab__order-details-delete-item"
  );

  clearQuantity.addEventListener("click", () => {
    quantityInputModal.value = 0;
    updateTotalPrice();
  });

  let cart = {};

  function showAlert(message, isSuccess = true) {
    const statusElement = document.getElementById("cart-form-status");
    statusElement.textContent = message;
    statusElement.style.color = isSuccess ? "green" : "red";
  }

  async function order(ev) {
    ev.preventDefault();

    cart = JSON.parse(localStorage.getItem("selectedProduct")) || {};

    if (Object.keys(cart).length === 0) {
      return showAlert("Please choose products to order", false);
    }

    const form = document.querySelector("#cart-form");
    if (!form.checkValidity()) {
      return showAlert("Please fill form correctly", false);
    }

    const data = new FormData(form);
    data.append("cart", JSON.stringify(cart));

    try {
      const response = await fetch("https://formspree.io/f/xdoqejoe", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (response.ok) {
        form.reset();
        localStorage.setItem("selectedProduct", JSON.stringify({}));
        showAlert("Thank you for your order!");
        document.querySelector(".modal").style.display = "none";
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      showAlert("There is an error: " + error, false);
    }
  }

  document.querySelector("#cart-form").addEventListener("submit", order);
});
