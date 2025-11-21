/**
 * CTA Section JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    
    const sparklesContainer = document.getElementById('sparklesContainer');
    const button = document.querySelector('.cta-button');
    const section = document.querySelector('.cta-section');
    
    if (!sparklesContainer || !button || !section) return;

    // Create 30 floating sparkles
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        sparkle.style.animationDuration = (2 + Math.random() * 3) + 's';
        
        sparkle.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v20M2 12h20M6.34 6.34l11.32 11.32M6.34 17.66L17.66 6.34"/>
            </svg>
        `;
        
        sparklesContainer.appendChild(sparkle);
    }

    // Button ripple effect
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(37, 99, 235, 0.4)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.pointerEvents = 'none';
        
        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left - 10) + 'px';
        ripple.style.top = (e.clientY - rect.top - 10) + 'px';
        
        this.appendChild(ripple);
        
        ripple.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(20)', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        });
        
        setTimeout(() => ripple.remove(), 600);
    });

    // Mouse parallax
    const floatingIcons = document.querySelectorAll('.floating-icon');
    const blobs = document.querySelectorAll('.gradient-blob');

    section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        floatingIcons.forEach((icon, index) => {
            const speed = (index + 1) * 20;
            icon.style.transform = `translateY(-50%) translate(${x * speed}px, ${y * speed}px)`;
        });

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 10;
            const currentTransform = window.getComputedStyle(blob).transform;
            blob.style.transform = `${currentTransform} translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    // Continuous sparkle generation
    setInterval(() => {
        if (sparklesContainer.children.length < 50) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDuration = (2 + Math.random() * 3) + 's';
            
            sparkle.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v20M2 12h20M6.34 6.34l11.32 11.32M6.34 17.66L17.66 6.34"/>
                </svg>
            `;
            
            sparklesContainer.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 5000);
        }
    }, 2000);

    // Button hover
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
