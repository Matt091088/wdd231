// js/directory.js

// 1. Leer datos del JSON
async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members, "grid"); // por defecto en grid
  } catch (error) {
    console.error("Error al cargar los miembros:", error);
  }
}

// 2. Mostrar empresas en el HTML
function displayMembers(members, view) {
  const container = document.querySelector("#members-container");
  container.innerHTML = ""; // limpiar antes de renderizar

  members.forEach((member) => {
    const card = document.createElement("section");
    card.classList.add("member-card", view);

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>📞 ${member.phone}</p>
      <a href="${member.website}" target="_blank">Visitar sitio</a>
      <p class="membership">Nivel: ${member.membership}</p>
    `;

    container.appendChild(card);
  });
}

// 3. Botones para cambiar vista
document.querySelector("#gridBtn").addEventListener("click", () => {
  fetch("data/members.json")
    .then((res) => res.json())
    .then((members) => displayMembers(members, "grid"));
});

document.querySelector("#listBtn").addEventListener("click", () => {
  fetch("data/members.json")
    .then((res) => res.json())
    .then((members) => displayMembers(members, "list"));
});

// 4. Footer dinámico
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Llamada inicial
loadMembers();
