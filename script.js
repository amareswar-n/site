// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initGreeting();
    initContactForm();
    initNavigation();
});

/**
 * Display dynamic greeting based on time
 */
function initGreeting() {
    const greetingElement = document.getElementById('greeting-message');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning! ☀️ Welcome to my website.";
    } else if (hour < 18) {
        greeting = "Good afternoon! 🌤️ Thanks for visiting.";
    } else {
        greeting = "Good evening! 🌙 Glad you stopped by.";
    }

    greetingElement.textContent = greeting;
}

/**
 * Handle contact form submission
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
        
        // Since this is static, we'll just show a success message
        alert(`Thank you! Your message has been recorded:\n\nEmail: ${email}\nMessage: ${message}`);
        
        // Clear the form
        form.reset();
        
        // For real functionality, you could use services like:
        // - Formspree (formspree.io)
        // - Netlify Forms
        // - EmailJS (emailjs.com)
    });
}

/**
 * Smooth scrolling for navigation links
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Example: Add dynamic content
function addDynamicContent() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>Dynamic Content</h2>
        <p>This section was added with JavaScript!</p>
    `;
    document.querySelector('main').appendChild(section);
}