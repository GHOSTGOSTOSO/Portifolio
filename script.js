// Scroll suave com blur
const scrollBtn = document.getElementById("scrollBtn");
const videos = document.getElementById("videos");

scrollBtn.addEventListener("click", () => {
  document.body.classList.add("scrolling");

  videos.scrollIntoView({
    behavior: "smooth"
  });

  setTimeout(() => {
    document.body.classList.remove("scrolling");
  }, 800);
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