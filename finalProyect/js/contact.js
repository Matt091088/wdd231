import { saveSubmission, getSubmissionCount, getLastSubmission } from './utils.js';

const form = document.getElementById("contactForm");
const modal = document.getElementById("confirmationModal");
const closeBtn = document.getElementById("modal-close");
const modalContent = modal.querySelector('.modal-content');

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Guardar envío
  saveSubmission({ name, email, message });

  const count = getSubmissionCount();
  const last = getLastSubmission();

  // Actualizar contenido del modal
  modalContent.innerHTML = `
    <span id="modal-close">&times;</span>
    <h2>Message Sent!</h2>
    <p>Thank you${name ? ', ' + name : ''} for contacting us.</p>
    <p>You are visitor number <strong>${count}</strong> who submitted the contact form.</p>
    ${last ? `<p>Last submission time: ${new Date(last.date).toLocaleString()}</p>` : ''}
  `;

  // Mostrar modal
  modal.classList.remove("hidden");

  // Cerrar modal al hacer click en X
  const closeBtnNew = modal.querySelector('#modal-close');
  closeBtnNew.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Cerrar modal automáticamente después de 4s
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 4000);

  form.reset();
});
