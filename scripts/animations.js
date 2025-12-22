
// Fade-in on page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

// Reveal elements on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

// Observe all sections and cards
document.querySelectorAll("section, .project-card").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
