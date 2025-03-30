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

// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    let isMenuOpen = false;
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        // Toggle mobile menu visibility with a smooth dropdown animation
        if (isMenuOpen) {
            // Open the menu
            mobileMenu.style.height = '100vh';
            document.body.classList.add('overflow-hidden'); // Prevent scrolling when menu is open
            
            // Animate menu items with staggered delay
            mobileMenuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.remove('opacity-0', 'translate-y-8');
                    item.classList.add('opacity-100', 'translate-y-0');
                }, 150 * (index + 1)); // Staggered animation
            });
            
            // Animate hamburger to X
            hamburgerLines[0].classList.add('rotate-45', 'translate-y-2');
            hamburgerLines[1].classList.add('opacity-0');
            hamburgerLines[2].classList.add('-rotate-45', '-translate-y-2');
        } else {
            // Reset menu items first
            mobileMenuItems.forEach((item) => {
                item.classList.remove('opacity-100', 'translate-y-0');
                item.classList.add('opacity-0', 'translate-y-8');
            });
            
            // Close the menu with a slight delay to allow item animations
            setTimeout(() => {
                mobileMenu.style.height = '0';
                document.body.classList.remove('overflow-hidden');
            }, 300);
            
            // Revert hamburger from X
            hamburgerLines[0].classList.remove('rotate-45', 'translate-y-2');
            hamburgerLines[1].classList.remove('opacity-0');
            hamburgerLines[2].classList.remove('-rotate-45', '-translate-y-2');
        }
    }
    
    // Toggle menu when hamburger is clicked
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Close menu when a link is clicked
    mobileMenuItems.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    // Initialize AOS
    AOS.init();

    // Start skill counters
    startSkillCounters();
    
    // Toggle hidden projects when View More button is clicked
    const viewMoreBtn = document.getElementById('view-more-btn');
    const hiddenProjects = document.getElementById('hidden-projects');
    
    if (viewMoreBtn && hiddenProjects) {
        viewMoreBtn.addEventListener('click', function() {
            // Toggle visibility of hidden projects
            if (hiddenProjects.classList.contains('hidden')) {
                hiddenProjects.classList.remove('hidden');
                viewMoreBtn.innerHTML = 'Show Less <i class="fas fa-arrow-up"></i>';
            } else {
                hiddenProjects.classList.add('hidden');
                viewMoreBtn.innerHTML = 'View More Projects <i class="fas fa-arrow-right"></i>';
            }
            
            // Scroll to the newly visible projects
            if (!hiddenProjects.classList.contains('hidden')) {
                setTimeout(() => {
                    hiddenProjects.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    }

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
