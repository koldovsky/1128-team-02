function openModal() {
  document.getElementById("cartModal").style.display = "block";
}

function closeModal() {
  document.getElementById("cartModal").style.display = "none";
}

window.onclick = function (event) {
  let modal = document.getElementById("cartModal");
  if (event.target === modal) {
    closeModal();
  }
};
