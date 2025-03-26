const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const navItemEls = document.querySelectorAll('.nav__item');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
});

navItemEls.forEach(navItemEl => {
  navItemEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open');
  });
});

const dropdownContainer = document.getElementById("dropdown-container");
const dropdown = document.getElementById("dropdown");
const gpaItem = document.getElementById("gpa-item");
let isOpen = false; // متغير لتتبع حالة القائمة المنسدلة

