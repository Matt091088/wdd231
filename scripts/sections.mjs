export function setSectionSelection(sections) {
  const select = document.querySelector('#sectionNumber');
  if (!select) return;

  select.innerHTML = '';
  sections.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.section;
    opt.textContent = `Section ${s.section}`;
    select.appendChild(opt);
  });
}
