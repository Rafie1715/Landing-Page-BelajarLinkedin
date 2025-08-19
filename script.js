document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Logic
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    // Observe all elements with the 'fade-in' class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Progress Bar Logic
    const progressBar = document.querySelector('.progress-bar');
    const body = document.body;
    const html = document.documentElement;

    window.addEventListener('scroll', () => {
        let scrollTop = html.scrollTop || body.scrollTop;
        let scrollHeight = html.scrollHeight || body.scrollHeight;
        let clientHeight = html.clientHeight || body.clientHeight;

        let scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
});