document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('header nav');
    const closeButton = nav.querySelector('.close-button');

    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', () => {
            nav.classList.toggle('open');
            burgerMenu.classList.toggle('open');
        });

        if (closeButton) {
            closeButton.addEventListener('click', () => {
                nav.classList.remove('open');
                burgerMenu.classList.remove('open');
            });
        }

        // Закриття меню при кліку на посилання (опціонально)
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                burgerMenu.classList.remove('open');
            });
        });
    }

    function revealOnScroll() {
        const heroSection = document.getElementById('hero');
        const aboutSection = document.getElementById('about');

        if (heroSection) {
            const heroImage = heroSection.querySelector('.hero-image');
            const heroContent = heroSection.querySelector('.hero-content');
            const heroTop = heroSection.offsetTop;
            const heroBottom = heroTop + heroSection.offsetHeight;
            const windowHeight = window.innerHeight;
            const triggerPoint = windowHeight * 0.8; // Анімація почнеться, коли 80% секції буде видно

            if (window.scrollY + triggerPoint > heroTop && window.scrollY < heroBottom) {
                heroSection.classList.add('show');
            }
        }

        if (aboutSection) {
            const aboutImage = aboutSection.querySelector('.about-image');
            const aboutTop = aboutSection.offsetTop;
            const aboutBottom = aboutTop + aboutSection.offsetHeight;
            const windowHeight = window.innerHeight;
            const triggerPoint = windowHeight * 0.8;

            if (window.scrollY + triggerPoint > aboutTop && window.scrollY < aboutBottom) {
                aboutSection.classList.add('show');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);

    // Викликаємо один раз при завантаженні сторінки, якщо секція вже у видимій області
    revealOnScroll();
});