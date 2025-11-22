/**
 * Navbar JavaScript - Brand Updated
 * Handles mobile menu toggle, dropdowns, smooth scrolling, and scroll effects
 */

document.addEventListener('DOMContentLoaded', function() {
    
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navbarCenter = document.querySelector('.navbar-center');
    const servicesDropdown = document.getElementById('servicesDropdown');

    // ===================================
    // TRANSPARENT TO DARK ON SCROLL
    // ===================================
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Initial check
    handleScroll();

    // Listen to scroll
    window.addEventListener('scroll', handleScroll);

    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================
    if (mobileToggle && navbarCenter) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            navbarCenter.classList.toggle('active');
            document.body.style.overflow = navbarCenter.classList.contains('active') ? 'hidden' : '';
        });
    }

    // ===================================
    // MOBILE DROPDOWN TOGGLE
    // ===================================
    if (servicesDropdown) {
        servicesDropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                servicesDropdown.classList.toggle('active');
            }
        });
    }

    // ===================================
    // CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    // ===================================
    document.addEventListener('click', function(e) {
        if (navbar && navbarCenter && !navbar.contains(e.target) && navbarCenter.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            navbarCenter.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ===================================
    // CLOSE MOBILE MENU WHEN CLICKING A LINK
    // ===================================
    const menuLinks = document.querySelectorAll('.navbar-menu a:not(.has-dropdown > a)');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 968 && navbarCenter) {
                mobileToggle.classList.remove('active');
                navbarCenter.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // ===================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (!href || href === '#' || href === '#!') {
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Calculate offset for fixed navbar
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // HIGHLIGHT ACTIVE SECTION ON SCROLL
    // ===================================
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-menu a[href^="#"]');
        
        let currentSection = '';
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes('#')) {
                const sectionId = href.split('#')[1];
                
                if (sectionId === currentSection) {
                    link.style.color = '#00D4FF';
                } else {
                    link.style.color = '';
                }
            }
        });
    }

    // Throttle scroll event for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            highlightActiveSection();
        });
    });

    // NAVBAR ALWAYS VISIBLE (disable hide-on-scroll)
    // Remove any transform so it stays in place even if previous logic set it
    if (navbar) {
        navbar.style.transform = 'translateY(0)';
    }

    // ===================================
    // PREVENT DROPDOWN FROM CLOSING ON CLICK INSIDE
    // ===================================
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu) {
        dropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});
