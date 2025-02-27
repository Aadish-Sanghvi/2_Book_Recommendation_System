// Ensure Particles.js Loads Correctly
document.addEventListener("DOMContentLoaded", function () {
    particlesJS.load('particles-js', 'static/particles.json', function () {
        console.log('Particles.js loaded successfully.');
    });
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        if (this.getAttribute('href').startsWith("#")) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Cursor Animation
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Hover Effect for Cards and Buttons
document.querySelectorAll('.card, .btn-recommend').forEach(element => {
    element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});
