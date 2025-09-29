// Timestamp para el formulario
document.getElementById("timestamp").value = new Date().toISOString();

// Animación al cargar las tarjetas
window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".membership-card");
  cards.forEach((card, index) => {
    setTimeout(() => card.classList.add("show"), index * 200);
  });

  // Modals
  const modalButtons = document.querySelectorAll(".modal-button");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  modalButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = document.getElementById(btn.dataset.modal);
      modal.style.display = "flex";
    });
  });

  closeButtons.forEach(span => {
    span.addEventListener("click", () => {
      span.parentElement.parentElement.style.display = "none";
    });
  });

  window.addEventListener("click", e => {
    modals.forEach(modal => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
});
