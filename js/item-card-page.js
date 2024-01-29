document.addEventListener("partialsLoaded", () => {});

document.addEventListener("DOMContentLoaded", function () {
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
});
