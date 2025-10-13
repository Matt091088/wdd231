// final/js/form-action.js
import { getLocalCount, getLastSubmission } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const name = params.get('name') || '';
const email = params.get('email') || '';
const message = params.get('message') || '';
const countParam = params.get('count') || '';
const container = document.getElementById('submissionResult');

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

if (container) {
  const storedCount = getLocalCount('contactSubmissions');
  const last = getLastSubmission('lastContactSubmission');

  container.innerHTML = `
    <h1>Thank you${name ? ', ' + escapeHtml(name) : ''}!</h1>
    <p>We received your message. Below are the details you sent:</p>
    <ul>
      <li><strong>Name:</strong> ${escapeHtml(name)}</li>
      <li><strong>Email:</strong> ${escapeHtml(email)}</li>
      <li><strong>Message:</strong> ${escapeHtml(message)}</li>
    </ul>
    <p>You are visitor number <strong>${escapeHtml(countParam || storedCount)}</strong> who submitted the contact form.</p>
    ${last ? `<p>Last saved submission time: ${escapeHtml(new Date(last.date).toLocaleString())}</p>` : ''}
    <p><a href="index.html">Return to home</a></p>
  `;
}
