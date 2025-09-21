// ------------------------
// Mostrar año y última modificación
// ------------------------
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ------------------------
// OpenWeatherMap API - clima en Posadas
// ------------------------
const apiKey = "f5e21e0e43e3f326161662a96d192abf"; // tu API key
const city = "Posadas,AR";
const units = "metric"; // Celsius
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

// Traer datos del clima
fetch(weatherUrl)
  .then(response => response.json())
  .then(data => {
    // Temperatura actual y descripción
    const current = data.list[0];
    document.getElementById("current-temp").textContent = `Temperature: ${current.main.temp}°C`;
    document.getElementById("weather-desc").textContent = `Condition: ${current.weather[0].description}`;

    // Pronóstico 3 días (tomando cada 8vo registro ~ 24h)
    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "<h3>3-Day Forecast</h3>";
    for (let i = 8; i <= 24; i += 8) {
      const f = data.list[i];
      const dayDiv = document.createElement("div");
      const date = new Date(f.dt_txt);
      dayDiv.textContent = `${date.toLocaleDateString()}: ${f.main.temp}°C, ${f.weather[0].description}`;
      forecastDiv.appendChild(dayDiv);
    }
  })
  .catch(error => console.error("Error fetching weather data:", error));

// ------------------------
// Spotlights - cargar 2-3 miembros GOLD/SILVER aleatorios
// ------------------------
fetch("data/members.json")
  .then(response => response.json())
  .then(members => {
    // filtrar GOLD/SILVER ignorando mayúsculas/minúsculas
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
    container.innerHTML = ""; // limpiar contenedor antes de agregar

    selected.forEach(member => {
      const card = document.createElement("div");
      card.className = "spotlight-card";

      // Imagen con width/height y lazy loading
      const logo = document.createElement("img");
      logo.src = member.image.trim();
      logo.alt = `${member.name} logo`;
      logo.width = 150;
      logo.height = 150;
      logo.loading = "lazy";
      logo.className = "spotlight-logo";

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
