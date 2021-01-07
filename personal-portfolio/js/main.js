'use strict';
//Variables
const menuElAll = document.querySelectorAll('.menu-items');
//Nav burger Toggle Button
document.querySelector('#burger-icon').addEventListener('click', function () {
  document.querySelector('.toggle').classList.toggle('active');
});
//Close drop down menu when an item clicked
for (let i = 0; i < menuElAll.length; i++) {
  menuElAll[i].addEventListener('click', function () {
    document.querySelector('.toggle').classList.toggle('active');
  });
}
//Implementing smooth scrolling
//Showcase
const showcaseScrollTo = document.querySelector('.item-1');
const showcase = document.querySelector('#showcase');

showcaseScrollTo.addEventListener('click', function () {
  showcase.scrollIntoView({ behavior: 'smooth' });
});
//Project
const projectsScrollTo = document.querySelector('.item-2');
const project = document.querySelector('#projects');

projectsScrollTo.addEventListener('click', function () {
  project.scrollIntoView({ behavior: 'smooth' });
});
//About
const aboutScrollTo = document.querySelector('.item-3');
const aboutEl = document.querySelector('#about');

aboutScrollTo.addEventListener('click', function () {
  aboutEl.scrollIntoView({ behavior: 'smooth' });
});
