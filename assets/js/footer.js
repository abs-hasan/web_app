/**
 * Footer JavaScript
 * Handles back-to-top button and newsletter form
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Back to Top Button
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            
            // Change button text
            const btn = newsletterForm.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = '✓ Subscribed!';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // Reset after 2 seconds
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                newsletterForm.reset();
            }, 2000);
        });
    }
});
