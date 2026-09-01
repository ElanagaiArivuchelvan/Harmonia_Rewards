// Scroll-triggered reveal
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('is-visible'), i * 50);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));


const CALENDLY_URL = "https://calendly.com/e-arivuchelvan/new-meeting";

document.querySelectorAll('[data-cta]').forEach(btn => {
  if (CALENDLY_URL) {
    btn.setAttribute('href', CALENDLY_URL);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener');
  } else {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Calendly nope');
    });
  }
});
