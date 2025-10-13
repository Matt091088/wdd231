// --- Modal functionality ---
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-image");
const modalDesc = document.getElementById("modal-description");
const modalClose = document.getElementById("modal-close");

// Escucha clicks en las tarjetas para abrir el modal
document.addEventListener("click", (e) => {
  const card = e.target.closest(".product-card");
  if (card) {
    const name = card.querySelector("h3").textContent;
    const imgSrc = card.querySelector("img").src;
    const desc = card.querySelector("p").textContent;

    modalTitle.textContent = name;
    modalImg.src = imgSrc;
    modalDesc.textContent = desc;

    modal.classList.remove("hidden");
  }
});

// Cerrar modal
modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Cerrar si clickea fuera del contenido
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
