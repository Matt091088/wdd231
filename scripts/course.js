// scripts/course.js

// Array de cursos (lo podés completar con true en "completed" si ya hiciste alguno)
const courses = [
  { subject: "WDD", number: 130, title: "Web Fundamentals", credits: 2, completed: true },
  { subject: "WDD", number: 131, title: "Dynamic Web Fundamentals", credits: 2, completed: true },
  { subject: "WDD", number: 231, title: "Frontend Web Development I", credits: 2, completed: false },
  { subject: "CSE", number: 110, title: "Introduction to Programming", credits: 2, completed: true },
  { subject: "CSE", number: 111, title: "Programming with Functions", credits: 2, completed: true },
  { subject: "CSE", number: 210, title: "Programming with Classes", credits: 2, completed: false }
];

// Contenedor de cursos
const container = document.querySelector("#courseContainer");

// Mostrar cursos dinámicamente
function displayCourses(courseList) {
  container.innerHTML = ""; // limpiar antes de mostrar
  let totalCredits = 0;

  courseList.forEach(course => {
    // crear tarjeta
    const card = document.createElement("div");
    card.classList.add("course-card");
    if (course.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <h3>${course.subject} ${course.number}</h3>
      <p>${course.title}</p>
      <p><strong>Credits:</strong> ${course.credits}</p>
    `;

    container.appendChild(card);

    // sumar créditos
    totalCredits += course.credits;
  });

  // actualizar créditos totales
  document.getElementById("totalCredits").textContent = totalCredits;
}

// Filtros
document.querySelector("#all").addEventListener("click", () => displayCourses(courses));
document.querySelector("#wdd").addEventListener("click", () => {
  const wddCourses = courses.filter(c => c.subject === "WDD");
  displayCourses(wddCourses);
});
document.querySelector("#cse").addEventListener("click", () => {
  const cseCourses = courses.filter(c => c.subject === "CSE");
  displayCourses(cseCourses);
});

// Mostrar todos los cursos al cargar la página
displayCourses(courses);
