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

// Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Initialize AOS
    AOS.init();

    // Start skill counters
    startSkillCounters();

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Function to update theme and icon
    function updateTheme(isDark) {
        // Update body classes
        body.classList.toggle('dark-mode', isDark);
        body.classList.toggle('light-mode', !isDark);
        
        // Update toggle button icon
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        
        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark-mode' : 'light-mode');
    }
    
    // Set initial theme based on saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        updateTheme(savedTheme === 'dark-mode');
    } else {
        updateTheme(prefersDark);
    }
    
    // Handle theme toggle click
    themeToggle.addEventListener('click', () => {
        const isDark = !body.classList.contains('dark-mode');
        updateTheme(isDark);
    });
    
    // Optional: Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            updateTheme(e.matches);
        }
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
        const cvUrl = 'public/mainaresume (3).pdf';
        
        // Fetch the PDF file
        fetch(cvUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('CV file not found');
                }
                return response.blob();
            })
            .then(blob => {
                // Create a URL for the blob
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Anne_Maina_CV.pdf';
                
                // Append link to body, click it, and remove it
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Clean up the URL object
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('Error downloading CV:', error);
                alert('Sorry, the CV file is currently unavailable. Please try again later.');
            });
    });
}
