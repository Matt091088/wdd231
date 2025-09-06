// scripts/date.js

// Año actual
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Última modificación del documento
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;
