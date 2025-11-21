// script.js
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section.fade-in');
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.classList.add('visible');
    }
  document.addEventListener('DOMContentLoaded', () => {
  const djName = document.querySelector('.dj-name');
  if (!djName) return;

  djName.addEventListener('click', () => {
    djName.classList.toggle('logo-visible');
  });
});
