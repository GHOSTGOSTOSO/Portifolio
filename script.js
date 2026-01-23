const scrollBtn = document.getElementById("scrollBtn");
const hero = document.querySelector(".hero");

scrollBtn.addEventListener("click", () => {
  hero.classList.add("blur");

  document.getElementById("videos").scrollIntoView({
    behavior: "smooth"
  });

  setTimeout(() => {
    hero.classList.remove("blur");
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