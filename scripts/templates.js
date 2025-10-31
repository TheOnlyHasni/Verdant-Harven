document.addEventListener('DOMContentLoaded', () => {
    const loadComponent = (elementId, url) => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = data;
                    element.classList.add('loaded'); // Add class after loading
                }
            })
            .catch(error => console.error(error));
    };

    const setActiveNavLink = () => {
        const navLinks = document.querySelectorAll('.header__nav-link');
        const currentPath = window.location.pathname;

        navLinks.forEach(link => {
            // Remove existing active class
            link.classList.remove('header__nav-link--active');

            // Get the path from the link's href
            const linkPath = new URL(link.href).pathname;

            // Add active class if paths match
            if (linkPath === currentPath) {
                link.classList.add('header__nav-link--active');
            }
        });
    };

    const initializeMobileNav = () => {
        const menuToggle = document.getElementById('menu-toggle');
        const nav = document.getElementById('main-nav');

        if (!menuToggle || !nav) return;

        const NAV_BREAKPOINT = 768;

        const closeMenu = () => {
            nav.classList.remove('is-active');
            menuToggle.setAttribute('aria-expanded', 'false');
            const icon = menuToggle.querySelector('span');
            if (icon) icon.textContent = '☰';
        };

        const openMenu = () => {
            nav.classList.add('is-active');
            menuToggle.setAttribute('aria-expanded', 'true');
            const icon = menuToggle.querySelector('span');
            if (icon) icon.textContent = '✕';
        };

        menuToggle.addEventListener('click', () => {
            if (nav.classList.contains('is-active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('is-active')) {
                closeMenu();
            }
        });

        // Close mobile menu if window resized above breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > NAV_BREAKPOINT) {
                closeMenu();
            }
        });
    };

    Promise.all([
        loadComponent('header-placeholder', '../header.html'),
        loadComponent('footer-placeholder', '../footer.html')
    ]).then(() => {
        setActiveNavLink();
        initializeMobileNav();
    });
});