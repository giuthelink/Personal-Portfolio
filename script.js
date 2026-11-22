const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // offset for the fixed navbar
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// light/dark theme switch
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const isDark = theme === "dark";
  themeToggle.querySelector("i").className = isDark ? "fas fa-sun" : "fas fa-moon";
  // labels come from the button's data attributes
  const label = isDark ? themeToggle.dataset.labelLight : themeToggle.dataset.labelDark;
  if (label) themeToggle.setAttribute("aria-label", label);
}

applyTheme(document.documentElement.getAttribute("data-theme") || "dark");

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) { }
});
