// ------------------------
// Mostrar año y última modificación
// ------------------------
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ------------------------
// Cargar todos los miembros en Directory
// ------------------------
fetch("data/members.json")
  .then(response => response.json())
  .then(members => {
    const container = document.getElementById("members-container");
    container.innerHTML = "";

    members.forEach(member => {
      const card = document.createElement("div");
      card.className = "member-card";

      const logo = document.createElement("img");
      logo.src = member.image.trim();
      logo.alt = `${member.name} logo`;
      logo.width = member.name === "Libertad Supermercado" ? 245 : 200;
      logo.height = member.name === "Libertad Supermercado" ? 154 : 200;
      logo.loading = "lazy";
      logo.className = "member-logo";

      card.appendChild(logo);

      const content = document.createElement("div");
      content.innerHTML = `
        <h3>${member.name}</h3>
        <p>📞 ${member.phone}</p>
        <p>📍 ${member.address}</p>
        <p>🌐 <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership: ${member.membership}</p>
      `;

      card.appendChild(content);
      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading directory members:", error));
