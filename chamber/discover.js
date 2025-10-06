// ---------- VISIT MESSAGE ----------
const message = document.getElementById("visit-message");
let lastVisit = localStorage.getItem("lastVisit");
let now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (daysDiff < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else if (daysDiff === 1) {
    message.textContent = `You last visited ${daysDiff} day ago.`;
  } else {
    message.textContent = `You last visited ${daysDiff} days ago.`;
  }
}
localStorage.setItem("lastVisit", now);

// ---------- LOAD JSON ----------
const grid = document.getElementById("discover-grid");

async function loadDiscover() {
  try {
    const response = await fetch("data/discover.json");
    const data = await response.json();
    displayCards(data);
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}

function displayCards(items) {
  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.classList.add("discover-card");

    card.innerHTML = `
      <h2>${item.name}</h2>
      <figure>
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button>Learn more</button>
    `;

    grid.appendChild(card);
  });
}

loadDiscover();

// ---------- YEAR ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- LAST MODIFIED ----------
document.getElementById("lastModified").textContent = document.lastModified;
