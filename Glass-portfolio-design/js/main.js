'use strict';

//Variables
const mainPageBtn = document.querySelector('.main-page-btn');
const projectsBtn = document.querySelector('.my-projects-btn');
const detailsBtn = document.querySelector('.my-details-btn');

const mainWrapper = document.querySelector('.main-wrapper');
const projectsWrapper = document.querySelector('.projects');
const detailsWrapper = document.querySelector('.details-wrapper');

const menuElAll = document.querySelector('.menu-nav');
const menuBtn = document.querySelectorAll('.menu-btn');

const themeBtns = document.querySelector('#theme-options-wrapper');
const themeStyle = document.querySelector('#theme-style');

//Change theme
//get from localstorage
let theme = localStorage.getItem('theme');

themeBtns.addEventListener('click', function (e) {
  if (e.target.classList.contains('theme-btn')) {
    const mode = e.target.dataset.mode;
    setTheme(mode);
  }
});

const setTheme = (mode) => {
  if (mode === 'winter') themeStyle.href = 'css/style.css';
  if (mode === 'spring') themeStyle.href = 'css/spring.css';
  if (mode === 'summer') themeStyle.href = 'css/summer.css';
  if (mode === 'autumn') themeStyle.href = 'css/autumn.css';
  localStorage.setItem('theme', mode);
};
//save to localStorage
theme === null ? setTheme('winter') : setTheme(theme);

//content slider functions
const slide = (percentage) => {
  mainWrapper.style.transform = `translateY(${percentage}%)`;
  projectsWrapper.style.transform = `translateY(${percentage}%)`;
  detailsWrapper.style.transform = `translateY(${percentage}%)`;
};

const slider = (target) => {
  if (target === mainPageBtn) {
    slide(0);
  } else if (target === projectsBtn) {
    slide(-100);
  } else if (target === detailsBtn) {
    slide(-200);
  }
};

//menu-nav
mainPageBtn.classList.add('active-menu');

menuElAll.addEventListener('click', function (e) {
  const clicked = e.target.closest('li');

  if (!clicked) return;

  menuBtn.forEach((btn) => btn.classList.remove('active-menu'));
  clicked.classList.add('active-menu');

  //content slider
  slider(clicked);
});
