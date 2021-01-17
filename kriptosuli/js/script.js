'use strict';
//Variables
const burgerIcon = document.querySelector('#burger-icon');
const navbarEl = document.querySelector('.navbar');

const themeBtns = document.querySelector('.theme-btns');
const themeStyle = document.querySelector('#theme-style');
const darkBtn = document.querySelector('.fa-moon');
const lightBtn = document.querySelector('.fa-sun');

//Toggle navbar
burgerIcon.addEventListener('click', function () {
  navbarEl.classList.toggle('active-nav');
});

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
  if (mode === 'light') {
    themeStyle.href = 'css/style.css';
    darkBtn.classList.remove('theme-active');
    lightBtn.classList.add('theme-active');
  }
  if (mode === 'dark') {
    themeStyle.href = 'css/dark.css';
    lightBtn.classList.remove('theme-active');
    darkBtn.classList.add('theme-active');
  }
  localStorage.setItem('theme', mode);
};
//save to localStorage
theme === null ? setTheme('light') : setTheme(theme);
