// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Contact Form Handling with animation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = contactForm.querySelector('button');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate form submission
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        contactForm.reset();
        
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000);
    }, 1500);
});

// Gallery image hover effect
document.querySelectorAll('.gallery-category img').forEach(img => {
    img.addEventListener('mouseover', () => img.style.transform = 'scale(1.1)');
    img.addEventListener('mouseout', () => img.style.transform = 'scale(1)');
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections
document.querySelectorAll('.about, .gallery-category, .contact, .facilities').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Gallery scrolling feature
document.querySelectorAll('.gallery-images').forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => isDown = false);
    container.addEventListener('mouseup', () => isDown = false);

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        container.scrollLeft = scrollLeft - walk;
    });
});

// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Hover effect for features in About section
document.querySelectorAll('.about .features li').forEach(item => {
    item.addEventListener('mouseover', function () {
        document.getElementById('feature-text').textContent = this.getAttribute('data-info');
    });

    item.addEventListener('mouseleave', function () {
        document.getElementById('feature-text').textContent = "Hover over a feature to learn more.";
    });
});

// Hover effect for facilities in Facilities section
document.querySelectorAll('.facilities .features li').forEach(item => {
    item.addEventListener('mouseover', function () {
        document.getElementById('facility-text').textContent = this.getAttribute('data-info');
    });

    item.addEventListener('mouseleave', function () {
        document.getElementById('facility-text').textContent = "Hover over a facility to learn more.";
    });
});
