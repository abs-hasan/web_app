/**
 * Navbar JavaScript
 * Handles mobile menu toggle, dropdowns, and smooth scrolling
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navbarCenter = document.querySelector('.navbar-center');
    const navbar = document.getElementById('navbar');

    if (mobileToggle && navbarCenter) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            navbarCenter.classList.toggle('active');
            document.body.style.overflow = navbarCenter.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Mobile dropdown toggle
    const servicesDropdown = document.getElementById('servicesDropdown');
    
    if (servicesDropdown) {
        servicesDropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                servicesDropdown.classList.toggle('active');
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navbar && navbarCenter && !navbar.contains(e.target) && navbarCenter.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            navbarCenter.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking a link
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

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
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
