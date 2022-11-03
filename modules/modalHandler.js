export function showPopUp(visibility) {
  const modal = document.querySelector("#warning");
  const closeButton = document.querySelector("#close");

  if (visibility) {
    modal.classList.toggle("show-modal");
  }

  closeButton.addEventListener("click", (e) => {
    return modal.classList.remove("show-modal");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show-modal");
    }
  });
}
