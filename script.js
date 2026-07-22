document.getElementById("year").textContent = new Date().getFullYear();

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const stored = localStorage.getItem("theme");
if (stored) root.setAttribute("data-theme", stored);

function currentTheme() {
  if (root.getAttribute("data-theme")) return root.getAttribute("data-theme");
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

themeToggle.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
