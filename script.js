// VigenNovus Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
        console.log('VigenNovus website loaded');
        initNavigation();
        initScrollAnimations();
        initButtonInteractions();
});

// Navigation
function initNavigation() {
        const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                                e.preventDefault();
                                const href = this.getAttribute('href');
                                if (href && href.startsWith('#')) {
                                                    const target = document.querySelector(href);
                                                    if (target) {
                                                                            target.scrollIntoView({ behavior: 'smooth' });
                                                    }
                                }
                });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';

    sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 60) {
                                current = section.getAttribute('id');
                }
    });

    navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === '#' + current) {
                                link.style.color = '#378ADD';
                }
    });
}

// Scroll animations
function initScrollAnimations() {
        const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -100px 0px'
        };

    const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                                    entry.target.style.opacity = '1';
                                                    entry.target.style.transform = 'translateY(0)';
                                                    observer.unobserve(entry.target);
                                }
                });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.product-card, .culture-card');
        animateElements.forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(20px)';
                    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    observer.observe(el);
        });
}

// Button interactions
function initButtonInteractions() {
        const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
                ctaButton.addEventListener('click', function() {
                                // Handle hiring button click
                                                       alert('Thank you for your interest! Please visit our careers page for more information.');
                });

            ctaButton.addEventListener('mouseenter', function() {
                            this.style.transform = 'translateY(-4px)';
            });

            ctaButton.addEventListener('mouseleave', function() {
                            this.style.transform = 'translateY(-2px)';
            });
    }
}

// Smooth scroll behavior fallback
function smoothScroll(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
            });
        }
}
