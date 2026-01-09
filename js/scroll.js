// ================================
// SIMPLE SCROLL REVEAL (ROBUST)
// ================================

(function () {
  const items = document.querySelectorAll('.reveal, .reveal-stagger');

  if (!('IntersectionObserver' in window) || items.length === 0) {
    // Fallback: show everything
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  items.forEach(el => observer.observe(el));
})();
