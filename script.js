// Skill counter animation
function startSkillCounters() {
    const skillNumbers = document.querySelectorAll('.number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.dataset.value);
        let current = 0;
        const increment = target / 50; // Divide animation into 50 steps
        const duration = 1500; // 1.5 seconds
        const stepTime = duration / 50;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                element.textContent = Math.round(current);
                setTimeout(updateCounter, stepTime);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    };

    // Intersection Observer to start animation when skills are in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counter animation for all numbers
                skillNumbers.forEach(animateCounter);
                // Update circle progress
                document.querySelectorAll('.skill-circle').forEach(circle => {
                    const percent = circle.dataset.percent;
                    const progressBar = circle.querySelector('.progress-bar');
                    const circumference = 2 * Math.PI * 40; // r = 40
                    const offset = circumference - (percent / 100) * circumference;
                    progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
                    progressBar.style.strokeDashoffset = offset;
                });
                // Disconnect observer after animation starts
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    // Observe the skills section
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeIcon(savedTheme === 'dark-mode');
}

function updateThemeIcon(isDark) {
    themeToggle.textContent = isDark ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    body.classList.remove(isDark ? 'light-mode' : 'dark-mode');
    localStorage.setItem('theme', isDark ? 'dark-mode' : 'light-mode');
    updateThemeIcon(isDark);
});

// Create animated background
function createBackgroundAnimation() {
    const container = document.createElement('div');
    container.className = 'background-animation';
    document.body.appendChild(container);

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        const startX = Math.random() * 100;
        particle.style.setProperty('--x', `${startX}%`);
        
        // Set animation properties
        particle.style.setProperty('--duration', `${20 + Math.random() * 10}s`);
        particle.style.setProperty('--delay', `${-Math.random() * 20}s`);
        
        container.appendChild(particle);
        
        // Remove and recreate particle after animation
        setTimeout(() => {
            particle.remove();
            createParticle();
        }, (20 + Math.random() * 10) * 1000);
    }

    // Create initial particles
    for (let i = 0; i < 40; i++) {
        createParticle();
    }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Contact Form Submission
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            // Replace with your actual form submission endpoint
            const response = await fetch('https://api.example.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            alert('Error sending message. Please try again later.');
            console.error('Error:', error);
        }
    });
}

// Download CV
const downloadBtn = document.querySelector('.download-cv');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        // Replace 'resume.pdf' with your actual CV file path
        const cvUrl = '/resume2.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Anne_Maina_CV.pdf'; // Replace with your preferred filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    startSkillCounters();
    createBackgroundAnimation();
});
