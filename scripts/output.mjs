export function setTitle(course) {
  const el = document.querySelector('#courseTitle');
  if (!el) return;
  el.textContent = course.title;
}

export function renderSections(sections) {
  const list = document.querySelector('#sectionsList');
  if (!list) return;
  list.innerHTML = '';

  sections.forEach(s => {
    const li = document.createElement('li');
    li.textContent = `Section ${s.section} — Enrolled: ${s.enrolled}/${s.capacity}`;
    list.appendChild(li);
  });
}
