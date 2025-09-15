// Menú hamburguesa responsive
const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav.navigation');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});
