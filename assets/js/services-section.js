document.addEventListener('DOMContentLoaded', function() {
    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });

    // Mouse Parallax Effect for Cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Parallax Scroll Effect for Background Elements
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const nebula = document.querySelector('.nebula-bg-services');
        const shapes = document.querySelectorAll('.shape-services');
        
        if (nebula) {
            nebula.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
        
        shapes.forEach((shape, index) => {
            const speed = 0.1 + (index * 0.05);
            shape.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.1}deg)`;
        });
        
        lastScrollY = scrollY;
    });

    // Enhanced Card Hover Glow
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.setProperty('--glow-opacity', '1');
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.setProperty('--glow-opacity', '0');
        });
    });

    // Floating Animation for Icon Badges
    document.querySelectorAll('.service-icon-badge').forEach((badge, index) => {
        let offset = index * 0.5;
        setInterval(() => {
            const currentTransform = badge.style.transform || '';
            const rotation = parseFloat(currentTransform.match(/rotate\(([-\d.]+)deg\)/)?.[1] || 0);
            badge.style.transform = `translateY(${Math.sin(Date.now() / 1000 + offset) * 5}px) rotate(${rotation}deg)`;
        }, 50);
    });

    // Gradient Animation for Title
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        document.querySelectorAll('.services-title-gradient').forEach(el => {
            el.style.filter = `hue-rotate(${hue * 0.2}deg)`;
        });
    }, 50);
});
