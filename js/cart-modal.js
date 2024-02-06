const cartModal = document.getElementById("cartModal");

function openModal() {
  cartModal.style.display = "block";
}

function closeModal() {
  cartModal.style.display = "none";
}

window.onclick = function (event) {
  let modal = cartModal;
  if (event.target === modal) {
    closeModal();
  }
};

const closeButton = document.querySelector(".close-modal");

closeButton.addEventListener("click", closeModal);
