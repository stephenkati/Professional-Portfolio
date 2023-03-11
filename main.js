const openMenu = document.querySelector('#menu');
const closeMenu = document.querySelector('#close');
const mobileMenu = document.querySelector('#mobile');
const menuLinks = document.querySelectorAll('.mobileMenu');

openMenu.addEventListener('click', (e) => {
  e.preventDefault();
  mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', (e) => {
  e.preventDefault();
  mobileMenu.style.display = 'none';
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});