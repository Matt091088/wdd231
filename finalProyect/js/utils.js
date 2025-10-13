// Guardar un envío
export function saveSubmission(submission) {
  const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  submissions.push({ ...submission, date: new Date().toISOString() });
  localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
  localStorage.setItem('lastContactSubmission', JSON.stringify({ ...submission, date: new Date().toISOString() }));
}

// Obtener contador
export function getSubmissionCount() {
  const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  return submissions.length;
}

// Obtener último envío
export function getLastSubmission() {
  return JSON.parse(localStorage.getItem('lastContactSubmission') || 'null');
}
