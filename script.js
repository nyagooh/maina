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
    const htmlElement = document.documentElement;
    
    // Function to update theme and icon
    function updateTheme(isDark) {
        // Update HTML classes for Tailwind dark mode
        if (isDark) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
        
        // Update toggle button icon
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        
        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    
    // Set initial theme based on saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        updateTheme(savedTheme === 'dark');
    } else {
        updateTheme(prefersDark);
    }
    
    // Handle theme toggle click
    themeToggle.addEventListener('click', () => {
        const isDark = !htmlElement.classList.contains('dark');
        updateTheme(isDark);
    });
    
    // Optional: Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            updateTheme(e.matches);
        }
    });

    // Content Protection
    // Disable right click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Disable keyboard shortcuts and key combinations
    document.addEventListener('keydown', function(e) {
        // Prevent Ctrl+S, Ctrl+U (view source), Ctrl+P (print)
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u' || e.key === 'p')) {
            e.preventDefault();
            return false;
        }
        // Prevent Ctrl+Shift+I (developer tools)
        if (e.ctrlKey && e.shiftKey && e.key === 'i') {
            e.preventDefault();
            return false;
        }
        // Prevent F12 (developer tools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
    });

    // Disable text selection for specific elements
    const protectedElements = document.querySelectorAll('.hero-text, .about-content, .projects-grid, .blogs-grid');
    protectedElements.forEach(element => {
        element.addEventListener('selectstart', function(e) {
            e.preventDefault();
        });
    });

    // Add watermark to copied text
    document.addEventListener('copy', function(e) {
        // Allow copying in form inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        e.preventDefault();
        const selection = window.getSelection();
        const copyText = selection.toString();
        const watermark = '\n\nSource: ' + window.location.href;
        const finalText = copyText + watermark;
        
        e.clipboardData.setData('text/plain', finalText);
    });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        const formData = new FormData(contactForm);
        const jsonData = {};

        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        fetch(contactForm.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        });
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
