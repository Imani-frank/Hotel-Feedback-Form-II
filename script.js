
// MICRO INTERACTION: INPUT SHAKE ON INVALID SUBMIT
document.querySelector("form").addEventListener("submit", (e) => {
  if (!e.target.checkValidity()) {
    e.preventDefault();
    const invalid = e.target.querySelector(":invalid");
    invalid.classList.add("shake");

    setTimeout(() => invalid.classList.remove("shake"), 400);
  }
});



const toggle = document.querySelector(".theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");

  const isLight = body.classList.contains("light");
  toggle.textContent = isLight ? "☀️" : "🌙";

  localStorage.setItem("theme", isLight ? "light" : "dark");
});
