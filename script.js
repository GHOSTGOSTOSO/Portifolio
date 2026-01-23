// Scroll suave ao clicar no botão
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("videos").scrollIntoView({
    behavior: "smooth"
  });
});

// Animação dos cards ao aparecer
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));