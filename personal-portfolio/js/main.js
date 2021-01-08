'use strict';
//Variables
const menuEl = document.querySelector('.toggle');
const navLinkEl = document.querySelectorAll('.nav-link');

//Nav burger Toggle Button
document.querySelector('#burger-icon').addEventListener('click', function () {
  document.querySelector('.toggle').classList.toggle('active');
});

//Close drop down menu when an item clicked
const closeMenu = () => {
  document.querySelector('.toggle').classList.toggle('active');
};
navLinkEl.forEach((link) => link.addEventListener('click', closeMenu));

//Smooth scrolling
menuEl.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
