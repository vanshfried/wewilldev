/* WeWillDev — main.js
   Small, restrained interactions only. */

(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Subtle reveal for elements marked .reveal — short fade + rise, once.
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach((el) => io.observe(el));
  }

  // Basic contact form: client-side only demo submit state.
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        form.reset();
        btn.textContent = 'Message sent ✓';
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
        }, 2400);
      }, 700);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initContactForm();
  });
})();
