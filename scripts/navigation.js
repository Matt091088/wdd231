// scripts/navigation.js

// Seleccionamos el botón y la navegación
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// Evento para abrir/cerrar el menú en mobile
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  
  // Cambiamos el ícono ☰ ↔ ✖
  if (navigation.classList.contains("show")) {
    menuButton.textContent = "✖";
  } else {
    menuButton.textContent = "☰";
  }
});


