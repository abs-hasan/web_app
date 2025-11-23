/**
 * Work Process Section JavaScript
 * Simple hover effects only
 */

document.addEventListener('DOMContentLoaded', function() {
    // Remove all complex animations - keep it simple
    const cards = document.querySelectorAll('.step-card');
    
    cards.forEach(card => {
        // Simple reveal on load
        card.classList.add('reveal');
        
        // Basic hover effect for icon
        const icon = card.querySelector('.icon-badge');
        if (icon) {
            card.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.05)';
            });
            
            card.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1)';
            });
        }
    });
});