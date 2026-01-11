// Projects Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile: Toggle card expansion on tap
    const countryCards = document.querySelectorAll('.country-card');
    
    // Only add click handlers on mobile/tablet
    if (window.innerWidth <= 768) {
        countryCards.forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    }
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Remove active class if switching to desktop
            if (window.innerWidth > 768) {
                countryCards.forEach(card => {
                    card.classList.remove('active');
                });
            }
        }, 250);
    });
    
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
