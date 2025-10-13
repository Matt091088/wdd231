// ====== Footer year ======
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ====== Products dynamic load ======
const productGrid = document.getElementById('product-grid');

if (productGrid) {
  async function loadProducts() {
    try {
      const response = await fetch('data/products.json');
      const products = await response.json();

      products.forEach(product => {
        const card = document.createElement('article');
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>${product.price}</strong></p>
          <button class="btn" onclick="showModal(${product.id})">View Details</button>
        `;
        productGrid.appendChild(card);
      });
    } catch (error) {
      console.error('Error loading products:', error);
      productGrid.innerHTML = '<p>Failed to load products.</p>';
    }
  }

  loadProducts();
}

// ====== Modal ======
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

if (modal && modalBody && modalClose) {
  window.showModal = function(id) {
    fetch('data/products.json')
      .then(res => res.json())
      .then(products => {
        const product = products.find(p => p.id === id);
        if (!product) return;
        modalBody.innerHTML = `
          <h2>${product.name}</h2>
          <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:5px;">
          <p>${product.description}</p>
          <p><strong>${product.price}</strong></p>
        `;
        modal.classList.remove('hidden');
      })
      .catch(err => console.error(err));
  };

  modalClose.addEventListener('click', () => modal.classList.add('hidden'));
  window.addEventListener('click', e => {
    if (e.target === modal) modal.classList.add('hidden');
  });


  modalBody.innerHTML = `
  <h2>${product.name}</h2>
  <img src="${product.image}" alt="${product.name}" width="400" height="300" loading="lazy" style="border-radius:5px;">
  <p>${product.description}</p>
  <p><strong>${product.price}</strong></p>
`;

}

// ====== Menu hamburguesa ======
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => menu.classList.toggle("show"));

    // Cerrar el menú al hacer clic en un enlace (solo en móviles)
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) menu.classList.remove("show");
      });
    });
  }
});

card.innerHTML = `
  <img src="${product.image}" alt="${product.name}" width="400" height="300" loading="lazy">
  <h3>${product.name}</h3>
  <p>${product.description}</p>
  <p><strong>${product.price}</strong></p>
  <button class="btn" onclick="showModal(${product.id})">View Details</button>
`;
