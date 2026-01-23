const btn = document.getElementById("scrollBtn");
const section = document.getElementById("videos");
const body = document.body;

// Scroll + blur cinematográfico
btn.addEventListener("click", () => {
  body.classList.add("blur");

  section.scrollIntoView({
    behavior: "smooth"
  });

  // Remove blur depois da transição
  setTimeout(() => {
    body.classList.remove("blur");
  }, 700);
});

// Animação dos cards
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));