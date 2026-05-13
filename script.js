// VigenNovus Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('VigenNovus website loaded');
    initNavigation();
    initButtons();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
          link.addEventListener('click', function(e) {
                  const href = this.getAttribute('href');
                  if (href.startsWith('#')) {
                            e.preventDefault();
                            const target = document.querySelector(href);
                            if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                            }
                  }
          });
    });
}

function initButtons() {
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
          button.addEventListener('click', function() {
                  const target = this.getAttribute('data-target') || '#products';
                  const section = document.querySelector(target);
                  if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                  }
          });
    });
}

// Scroll animations
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
          }
    });
});
