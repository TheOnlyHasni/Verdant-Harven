document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.header__nav');

    const NAV_BREAKPOINT = 768; // px

    function closeMenu() {
        if (!nav) return;
        nav.classList.remove('is-active');
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
            const icon = menuToggle.querySelector('span');
            if (icon) icon.textContent = '☰';
        }
    }

    function openMenu() {
        if (!nav) return;
        nav.classList.add('is-active');
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'true');
            const icon = menuToggle.querySelector('span');
            if (icon) icon.textContent = '✕';
        }
    }

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            if (nav.classList.contains('is-active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close menu when a navigation link is clicked (mobile behavior)
        nav.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.matches && target.matches('.header__nav-link')) {
                // small delay to allow link navigation on same page anchors
                setTimeout(closeMenu, 200);
            }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });

        // Close mobile menu if window resized above breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > NAV_BREAKPOINT) {
                closeMenu();
            }
        });
    }

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
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${currentYear} Verdant Haven. All rights reserved.`;
    }
});