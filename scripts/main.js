// document.addEventListener('DOMContentLoaded', () => {
//     // Immediately remove .html extension from URL if present
//     (function() {
//         if (window.history && window.history.pushState && window.location.pathname.endsWith('.html')) {
//             let newURL = window.location.pathname.replace(/\.html$/, '');
            
//             // Handle index.html specifically to redirect to root
//             if (newURL.endsWith('/index')) {
//                 newURL = newURL.slice(0, -5); // Remove '/index'
//                 if (newURL === '') {
//                     newURL = '/'; // Ensure it's a single slash for the root
//                 }
//             }
            
//             window.history.replaceState({ path: newURL }, '', newURL);
//         }
//     })();
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero CTA button functionality
    const heroCTA = document.querySelector('.hero__cta');
    if (heroCTA) {
        heroCTA.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(heroCTA.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Dynamic footer year
    const footerYear = document.querySelector('.footer__copyright p');
    if (footerYear) {
        const copyrightYear = 2025;
        footerYear.innerHTML = `&copy; ${copyrightYear} Verdant Haven. All rights reserved.`;
    }
});
