'use strict';
//Variables
const burgerIcon = document.querySelector('#burger-icon');
const navbarEl = document.querySelector('.navbar');

const themeBtns = document.querySelector('.theme-btns');
const themeStyle = document.querySelector('#theme-style');

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
    console.log(e.target.dataset.mode);
  }
});

const setTheme = (mode) => {
  if (mode === 'light') themeStyle.href = 'css/style.css';
  if (mode === 'dark') themeStyle.href = 'css/dark.css';
  localStorage.setItem('theme', mode);
};
//save to localStorage
theme === null ? setTheme('light') : setTheme(theme);
