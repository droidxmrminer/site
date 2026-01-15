/**
 * DroidXMRMiner Landing Page - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== LANGUAGE INITIALIZATION =====
    i18n.applyTranslations(i18n.detectLanguage());

    // Language selector toggle
    const langToggle = document.getElementById('lang-toggle');
    const langMenu = document.getElementById('lang-menu');

    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => langMenu.classList.add('hidden'));

    // Language buttons
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => i18n.setLanguage(btn.dataset.lang));
    });

    // ===== THEME TOGGLE =====
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme or system preference
    if (localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
