// ------------------------
// Mostrar año y última modificación
// ------------------------
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ------------------------
// Spotlights - cargar 2-3 miembros GOLD/SILVER aleatorios
// ------------------------
fetch("data/members.json")
  .then(response => response.json())
  .then(members => {
    // Filtrar GOLD/SILVER ignorando mayúsculas/minúsculas
    const goldSilver = members.filter(m =>
      m.membership.toUpperCase() === "GOLD" || m.membership.toUpperCase() === "SILVER"
    );

    const spotlightCount = Math.min(3, goldSilver.length);
    const selected = [];
    while (selected.length < spotlightCount) {
      const random = goldSilver[Math.floor(Math.random() * goldSilver.length)];
      if (!selected.includes(random)) selected.push(random);
    }

    const container = document.querySelector(".spotlight-container");
    container.innerHTML = ""; // Limpiar contenedor antes de agregar

    selected.forEach(member => {
      const card = document.createElement("div");
      card.className = "spotlight-card";

      // Crear imagen
      const logo = document.createElement("img");
      logo.src = member.image.trim();
      logo.alt = `${member.name} logo`;
      logo.loading = "lazy";
      logo.className = "spotlight-logo";

      // Asignar width y height correctos según cada imagen
      switch (member.name) {
        case "Power Gym":
          logo.width = 200;
          logo.height = 200;
          break;
        case "City Hotel":
          logo.width = 200;
          logo.height = 200;
          break;
        case "Libertad Supermercado":
          logo.width = 245;
          logo.height = 154;
          break;
        case "California Supermercado":
          logo.width = 225;
          logo.height = 225;
          break;
        case "Gentizi Home & Deco":
          logo.width = 225;
          logo.height = 225;
          break;
        case "Universidad de Misiones":
          logo.width = 225;
          logo.height = 225;
          break;
        case "Posadas Travel Agency":
          logo.width = 225;
          logo.height = 225;
          break;
        default:
          logo.width = 150;
          logo.height = 150;
      }

      // Insertar elementos
      card.appendChild(logo);
      card.innerHTML += `
        <h3>${member.name}</h3>
        <p>Phone: ${member.phone}</p>
        <p>Address: ${member.address}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership: ${member.membership}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading members:", error));

// ------------------------
// Mostrar año y última modificación (si no lo tienes en home.js)
// ------------------------
if(document.getElementById("year")) {
  document.getElementById("year").textContent = new Date().getFullYear();
}
if(document.getElementById("lastModified")) {
  document.getElementById("lastModified").textContent = document.lastModified;
}
