'use strict';
//Variables
const burgerIcon = document.querySelector('#burger-icon');
const navbarEl = document.querySelector('.navbar');

//Toggle navbar
burgerIcon.addEventListener('click', function () {
  navbarEl.classList.toggle('active-nav');
});
