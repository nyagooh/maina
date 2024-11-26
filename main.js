import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Typing animation
const titles = [
  "Software Developer",
  "Product Manager",
  "Web Designer",
  "UX Designer"
];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100; // Typing speed
let erasingDelay = 150; // Slower erasing speed
let newTextDelay = 2000; // Delay before starting new text

function typeText() {
  const titleElement = document.querySelector('.typing-title');
  const currentTitle = titles[titleIndex];

  if (isDeleting) {
    charIndex--;
    typingDelay = erasingDelay;
  } else {
    charIndex++;
    typingDelay = 100;
  }

  titleElement.textContent = currentTitle.substring(0, charIndex);

  if (!isDeleting && charIndex === currentTitle.length) {
    isDeleting = true;
    typingDelay = newTextDelay; // Wait before starting to delete
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length; // Move to next title
    typingDelay = typingDelay; // Reset typing delay for new title
  }

  setTimeout(typeText, typingDelay);
}

// Start typing animation
typeText();

// Particles.js configuration
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: '#5e35b1'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.9,
      random: false
    },
    size: {
      value: 2,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#5e35b1',
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'circular',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    }
  },
  retina_detect: true
});

// Animate skill circles
const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const circle = entry.target;
      const percent = circle.getAttribute('data-percent');
      const circumference = 2 * Math.PI * 70; // radius is 70
      const offset = circumference - (percent / 100 * circumference);
      circle.style.strokeDashoffset = offset;
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  threshold: 0.5
});

document.querySelectorAll('.skill-circle circle.progress').forEach(circle => {
  circle.style.strokeDasharray = 2 * Math.PI * 70;
  observer.observe(circle);
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});