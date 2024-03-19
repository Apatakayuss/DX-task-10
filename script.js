const navMenu = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
