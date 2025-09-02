document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll('.fade-in');
  

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = '0.1s';
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeEls.forEach(el => {
    observer.observe(el);
  });
});

const icon = document.getElementById("theme-icon");
const darkClass = "dark-mode";

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add(darkClass);
  icon.classList.replace("fa-moon", "fa-sun");
}

function toggleDarkMode() {
  document.body.classList.toggle(darkClass);
  const isDark = document.body.classList.contains(darkClass);

  icon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");

  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

window.addEventListener("scroll", () => {
  const secciones = document.querySelectorAll("section[id]");
  const enlaces = document.querySelectorAll(".fila2 ul li a");

  let seccionActiva = null;

  secciones.forEach((seccion) => {
    const top = seccion.offsetTop - 100;
    const bottom = top + seccion.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {
      seccionActiva = seccion.getAttribute("id");
    }
  });

  enlaces.forEach((enlace) => {
    enlace.classList.remove("activo");
    if (enlace.getAttribute("href") === "#" + seccionActiva) {
      enlace.classList.add("activo");
    }
  });
});

