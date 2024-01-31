document.addEventListener("partialsLoaded", () => {
  const quantityInput = document.querySelector(".purchase__quantity-input");
  const buttonUp = document.querySelector(".button-up");
  const buttonDown = document.querySelector(".button-down");

  buttonUp.addEventListener("click", function () {
    quantityInput.value = parseInt(quantityInput.value, 10) + 1;
  });

  buttonDown.addEventListener("click", function () {
    if (quantityInput.value > 0) {
      quantityInput.value = parseInt(quantityInput.value, 10) - 1;
    }
  });
  const buyButton = document.getElementById("buyButton");
  const cartTab = document.querySelector(".cart-tab");
  const cartIcon = document.querySelector(".cart-icon");
  const imageToVibrate = document.querySelector(".cart-anim");
  let count = 0;

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
    cartIcon.addEventListener("click", openModal);
  });
});
