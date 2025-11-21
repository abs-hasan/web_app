/**
 * Why Choose Section JavaScript
 * Handles animations and interactive effects
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Enhanced hover interaction
    document.querySelectorAll('.feature-item').forEach(item => {
        const iconCircle = item.querySelector('.icon-circle');
        const iconSvg = item.querySelector('.icon-svg');

        item.addEventListener('mouseenter', () => {
            // Trigger icon bounce animation
            iconSvg.style.animation = 'none';
            setTimeout(() => {
                iconSvg.style.animation = 'iconBounce 0.6s ease, iconFloat 3s ease-in-out infinite';
            }, 10);
        });
    });

    // Parallax effect on scroll for floating dots
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const dots = document.querySelectorAll('.dot');
        
        dots.forEach((dot, index) => {
            const speed = 0.1 + (index * 0.02);
            dot.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });

    // Add subtle rotation to icons on scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                
                document.querySelectorAll('.icon-circle').forEach((icon, index) => {
                    const rotation = scrollPercent * 360 * (index % 2 === 0 ? 1 : -1);
                    icon.style.transform = `translate(-50%, -50%) rotate(${rotation * 0.1}deg)`;
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });
});
