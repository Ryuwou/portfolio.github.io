document.addEventListener('DOMContentLoaded', () => {
  // Particles.js
  particlesJS('particles-js', {
    particles: {
      number: { value: 60 },
      color: { value: ['#00FFCC', '#00FFFF'] },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#00ffcc',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

  // Bouton Dark/Light
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
  });

  // Défilement doux quand on clique sur un lien du menu
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Apparition des sections au scroll (Intersection Observer)
  const sections = document.querySelectorAll('section');
  const options = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
      }
    });
  }, options);

  sections.forEach(sec => {
    observer.observe(sec);
  });

  // Formulaire de contact (simulation d’envoi)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Votre message a bien été envoyé (simulation) !');
      contactForm.reset();
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('langToggle');
  const translations = {
      fr: {
          home: "Accueil",
          about: "À propos",
          skills: "Compétences",
          projects: "Projets",
          contact: "Contact"
      },
      en: {
          home: "Home",
          about: "About",
          skills: "Skills",
          projects: "Projects",
          contact: "Contact"
      }
  };

  let currentLang = "fr";

  langToggle.addEventListener('click', () => {
      currentLang = currentLang === "fr" ? "en" : "fr";
      langToggle.textContent = currentLang.toUpperCase();
      
      document.querySelectorAll(".nav-links li a").forEach(link => {
          const key = link.getAttribute("data-key");
          link.textContent = translations[currentLang][key];
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
const langToggle = document.getElementById('langToggle');
const translations = {
    fr: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
        aboutTitle: "À propos de moi",
        aboutText: "Passionnée par la technologie et la cybersécurité, je conçois des applications web modernes, interactives et sécurisées. J’aime explorer de nouvelles approches et relever des défis variés, qu’il s’agisse d’animations complexes ou de pentesting."
    },
    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        aboutTitle: "About Me",
        aboutText: "Passionate about technology and cybersecurity, I design modern, interactive, and secure web applications. I love exploring new approaches and tackling various challenges, whether it's complex animations or pentesting."
    }
};

let currentLang = "fr";

langToggle.addEventListener('click', () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    langToggle.textContent = currentLang.toUpperCase();

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[currentLang][key];
    });
});
});
document.addEventListener('DOMContentLoaded', () => {
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

let isDarkMode = true;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.classList.remove('light-mode');
        themeToggle.textContent = "🌙";
    } else {
        body.classList.add('light-mode');
        themeToggle.textContent = "☀️";
    }
});
});

