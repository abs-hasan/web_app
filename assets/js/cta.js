document.addEventListener('DOMContentLoaded', function() {
    // Create floating sparkles
    const sparklesContainer = document.getElementById('sparklesContainer');
    
    if (!sparklesContainer) return; // Exit if elements don't exist
    
    function createSparkles() {
        for (let i = 0; i < 40; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 4 + 's';
            sparkle.style.animationDuration = (3 + Math.random() * 3) + 's';
            
            sparkle.innerHTML = '✨';
            sparklesContainer.appendChild(sparkle);
        }
    }

    createSparkles();

    // Create floating particles
    const particlesContainer = document.getElementById('particlesContainer');
    
    function createParticles() {
        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            
            particlesContainer.appendChild(particle);
        }
    }

    createParticles();

    // Form submission
    const form = document.getElementById('ctaForm');
    const submitBtn = form.querySelector('.submit-btn');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Loading state
        submitBtn.classList.add('loading');
        submitBtn.textContent = '';
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success state
        submitBtn.classList.remove('loading');
        submitBtn.classList.add('success');
        submitBtn.textContent = '✓ Message Sent!';
        
        // Reset form
        setTimeout(() => {
            submitBtn.classList.remove('success');
            submitBtn.textContent = 'Submit';
            form.reset();
        }, 3000);
    });

    // Input animations
    const inputs = document.querySelectorAll('.form-input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = '';
        });

        // Bounce on first click
        input.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });

    // Mouse parallax
    const section = document.querySelector('.elite-cta-section');
    const icons = document.querySelectorAll('.bouncing-icon');
    const blobs = document.querySelectorAll('.gradient-blob');

    section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        icons.forEach((icon, index) => {
            const speed = (index + 1) * 25;
            icon.style.transform += ` translate(${x * speed}px, ${y * speed}px)`;
        });

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 15;
            const currentTransform = getComputedStyle(blob).transform;
            blob.style.transform = `${currentTransform} translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    // Button ripple effect
    submitBtn.addEventListener('click', function(e) {
        if (this.classList.contains('loading') || this.classList.contains('success')) return;
        
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.width = '30px';
        ripple.style.height = '30px';
        ripple.style.pointerEvents = 'none';
        
        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left - 15) + 'px';
        ripple.style.top = (e.clientY - rect.top - 15) + 'px';
        
        this.appendChild(ripple);
        
        ripple.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(20)', opacity: 0 }
        ], {
            duration: 700,
            easing: 'ease-out'
        });
        
        setTimeout(() => ripple.remove(), 700);
    });

    // Continuous sparkle generation
    setInterval(() => {
        if (sparklesContainer.children.length < 50) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDuration = (3 + Math.random() * 3) + 's';
            sparkle.innerHTML = '✨';
            
            sparklesContainer.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 6000);
        }
    }, 2500);
});
