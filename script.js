const btn = document.querySelector(".btn-trabalhos");

btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  btn.style.setProperty("--x", `${x}px`);
  btn.style.setProperty("--y", `${y}px`);
});

btn.addEventListener("click", () => {
  btn.classList.add("clicked");

  setTimeout(() => {
    btn.classList.remove("clicked");
  }, 300);
});