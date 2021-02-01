'use strict';
//Variables
const burgerIcon = document.querySelector('#burger-icon');
const navbarEl = document.querySelector('.navbar');

// const themeBtns = document.querySelector('.theme-btns');
const themeStyle = document.querySelector('#theme-style');
const themeBtn = document.querySelector('.theme-btn');
// const darkBtn = document.querySelector('.fa-moon');
// const lightBtn = document.querySelector('.fa-sun');

//Toggle navbar
burgerIcon.addEventListener('click', function () {
  navbarEl.classList.toggle('active-nav');
});

//Change theme
let theme = localStorage.getItem('theme');

const setTheme = () => {
  if (themeBtn.checked) {
    themeStyle.href = 'css/dark.css';
    localStorage.setItem('theme', 'true');
  } else {
    themeStyle.href = 'css/style.css';
    localStorage.setItem('theme', 'false');
  }
};
//Get theme from localstorage
if (theme === 'true') themeBtn.setAttribute('checked', 'checked');
setTheme();

//Change theme with button
themeBtn.addEventListener('change', function () {
  setTheme();
});
