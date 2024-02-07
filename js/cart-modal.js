const quantityInput = document.querySelector(".purchase__quantity-input-modal");
const buttonUp = document.querySelector(".button-up-modal");
const buttonDown = document.querySelector(".button-down-modal");

buttonUp.addEventListener("click", function () {
  quantityInput.value = parseInt(quantityInput.value, 10) + 1;
});

buttonDown.addEventListener("click", function () {
  if (quantityInput.value > 0) {
    quantityInput.value = parseInt(quantityInput.value, 10) - 1;
  }
});
