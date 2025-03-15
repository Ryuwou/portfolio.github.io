document.addEventListener("DOMContentLoaded", () => {
  /*** Particles.js ***/
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      color: { value: ["#00FFCC", "#00FFFF"] },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffcc",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });

  /*** Défilement doux pour les liens de navigation ***/
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });

  /*** Apparition des sections au scroll ***/
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("section").forEach((sec) => observer.observe(sec));

  /*** Gestion du menu burger ***/
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  if (burgerMenu && navLinks) {
    burgerMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  /*** Gestion du changement de langue avec i18next ***/
  const savedLang = localStorage.getItem("lang") || "fr";

  i18next.init(
    {
      lng: savedLang,
      resources: {
        en: {
          translation: {
            "home": "Home",
            "about": "About",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact",
            "title": "Portfolio Kenza Hidouche",
            "name": "Kenza Hidouche",
            "tagline": "Terminal STI2D",
            "cta": "Discover",
            "aboutTitle": "About Me",
            "aboutText": "Hello, my name is Kenza Hidouche and I'm in my final year of STI2D. I'm passionate about programming, science, and engineering. This portfolio showcases my projects. Feel free to contact me to discuss!",
            "skillsTitle": "My Skills",
            "development": "Development",
            "graphics": "Graphics",
            "algorithmics": "Algorithmics & Modeling",
            "projectsTitle": "My Projects",
            "project1": "Hexapod",
            "project1Desc": "The six-legged robot is designed to explore places inaccessible to humans in chaotic situations",
            "project2": "My Video Game",
            "project2Desc": "Time Tempest is a game where you play as Neyth, a time traveler tasked with correcting historical distortions.",
            "project3": "My site",
            "project3Desc": "Design of a culinary website with images and links to recipes, as well as interactive features.",
            "contactTitle": "Contact Me",
            "contactText": "You can reach me via:",
            "moreProjectsTitle": "And much more!",
            "moreProjectsText": "Some projects are still in development.",
            "discover": "Discover",
            "emailLabel": "Email",
            "phoneLabel": "Phone",
            "footer": "© 2025 Kenza Hidouche - All rights reserved",
          },
        },
        fr: {
          translation: {
            "home": "Accueil",
            "about": "À propos",
            "skills": "Compétences",
            "projects": "Projets",
            "contact": "Contact",
            "title": "Portfolio Kenza Hidouche",
            "name": "Kenza Hidouche",
            "tagline": "Terminale STI2D",
            "cta": "Découvrir",
            "aboutTitle": "À propos de moi",
            "aboutText": "Bonjour, je m'appelle Kenza Hidouche et je suis en Terminale STI2D. Passionnée par la programmation, la science et l'ingénierie. Ce portfolio présente mes projets, N'hésitez pas à me contacter pour échanger!",
            "skillsTitle": "Mes Compétences",
            "simulatorTitle": "Simulateur Algorithme",
            "development": "Développement",
            "algorithmics": "Algorithmique & Modélisation",
            "graphics": "Graphisme",
            "projectsTitle": "Mes Projets",
            "project1": "Hexapode",
            "project1Desc": "Le robot à six pattes est conçu pour explorer des endroits inaccessibles pour l'homme en cas de situation chaotique",
            "project2": "Mon Jeu Vidéo",
            "project2Desc": "Time Tempest est un jeu où vous incarnez Neyth, un voyageur temporel chargé de corriger les distorsions historiques",
            "project3": "Mon site",
            "project3Desc": "Conception d'un site culinaire avec des images et des liens vers des recettes, ainsi que des fonctionnalités interactives",
            "contactTitle": "Contactez-moi",
            "moreProjectsTitle": "Et bien plus encore !",
            "moreProjectsText": "Certains projets sont encore en cours de développement.",
            "contactText": "Vous pouvez me joindre via :",
            "discover": "Découvrir",
            "emailLabel": "Email",
            "phoneLabel": "Téléphone",
            "footer": "© 2025 Kenza Hidouche - Tous droits réservés",
          },
        },
      },
    },
    function (err, t) {
      updateContent();
    }
  );

  function updateContent() {
    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.getAttribute("data-key");
      element.textContent = i18next.t(key);
    });
  }

  function switchLanguage(lang) {
    i18next.changeLanguage(lang, function () {
      updateContent();
      localStorage.setItem("lang", lang);
      document.getElementById("fr").classList.toggle("selected", lang === "fr");
      document.getElementById("en").classList.toggle("selected", lang === "en");
    });
  }

  document.getElementById("fr").addEventListener("click", function () {
    switchLanguage("fr");
  });

  document.getElementById("en").addEventListener("click", function () {
    switchLanguage("en");
  });

  updateContent();
});

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  if (burgerMenu && navLinks) {
    burgerMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      burgerMenu.classList.toggle("open");
    });

    // Fermer le menu lorsqu'un lien est cliqué
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        burgerMenu.classList.remove("open");
      });
    });
  }
});

// Désactiver Particles.js sur mobile
if (window.innerWidth < 768) {
  document.getElementById("particles-js").style.display = "none";
}

// Adapter les animations au scroll
const observerOptions = {
  threshold: window.innerWidth < 768 ? 0.3 : 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((sec) => observer.observe(sec));

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector("nav ul");

  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

document.querySelector('.menu-button').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});


