// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// EmailJS ile form gönderimi
emailjs.init("YOUR_USER_ID"); // EmailJS'den alacağınız user ID

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        from_name: contactForm.querySelector('input[type="text"]').value,
        reply_to: contactForm.querySelector('input[type="email"]').value,
        message: contactForm.querySelector('textarea').value
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(() => {
            alert('Mesajınız başarıyla gönderildi!');
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        });
}); 