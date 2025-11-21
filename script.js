// script.js

document.addEventListener('DOMContentLoaded', () => {
  const djName = document.querySelector('.dj-name');
  if (!djName) return;

  // Desktop-Hover (Maus): Logo zeigen/verstecken
  djName.addEventListener('mouseenter', () => {
    djName.classList.add('logo-visible');
  });

  djName.addEventListener('mouseleave', () => {
    djName.classList.remove('logo-visible');
  });

  // Mobile/Click: Logo an/aus toggeln
  djName.addEventListener('click', (e) => {
    // verhindert, dass der Klick z.B. einen Link auslöst
    e.preventDefault();
    djName.classList.toggle('logo-visible');
  });
});
