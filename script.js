// script.js

document.addEventListener('DOMContentLoaded', () => {
  const djName = document.querySelector('.dj-name');
  if (!djName) return;

  const isTouchDevice =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  if (isTouchDevice) {
    // Handy / Tablet: Tippen = Logo an/aus
    djName.addEventListener('click', (e) => {
      e.preventDefault();
      djName.classList.toggle('logo-visible');
    });
  } else {
    // Desktop: Hover
    djName.addEventListener('mouseenter', () => {
      djName.classList.add('logo-visible');
    });

    djName.addEventListener('mouseleave', () => {
      djName.classList.remove('logo-visible');
    });
  }
});
