const btn = document.getElementById("btnTrabalhos");
const section = document.getElementById("trabalhos");

btn.addEventListener("click", () => {
  section.scrollIntoView({ behavior: "smooth" });
});