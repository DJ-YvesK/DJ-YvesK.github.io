// script.js

document.addEventListener('DOMContentLoaded', () => {
  const djName = document.querySelector('.dj-name');
  if (!djName) return;

  djName.addEventListener('click', () => {
    djName.classList.toggle('logo-visible');
  });
});
