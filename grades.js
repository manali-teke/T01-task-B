// Course grade calculator: handles the grade form.

const form = document.getElementById("grade-form");
const statusEl = document.getElementById("status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  statusEl.textContent = "Grade calculation is coming soon.";
});
