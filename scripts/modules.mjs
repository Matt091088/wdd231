import byuiCourse from './course.mjs';
import { setSectionSelection } from './sections.mjs';
import { renderSections, setTitle } from './output.mjs';

document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  setTitle(byuiCourse);
  setSectionSelection(byuiCourse.sections);
  renderSections(byuiCourse.sections);

  // Event listeners
  document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    byuiCourse.changeEnrollment(sectionNum, true);
    renderSections(byuiCourse.sections);
  });

  document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
  });
});
