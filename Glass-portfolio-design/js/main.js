'use strict';

//Variables
const mainPageBtn = document.querySelector('.main-page-btn');
const projectsBtn = document.querySelector('.my-projects-btn');
const detailsBtn = document.querySelector('.my-details-btn');

const mainWrapper = document.querySelector('.main-wrapper');
const projectsWrapper = document.querySelector('.projects');
const detailsWrapper = document.querySelector('.details-wrapper');

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

const menuElAll = document.querySelector('.menu-nav');
const menuBtn = document.querySelectorAll('.menu-btn');

menuElAll.addEventListener('click', function (e) {
  const clicked = e.target.closest('li');

  if (!clicked) return;

  menuBtn.forEach((btn) => btn.classList.remove('active-menu'));
  clicked.classList.add('active-menu');

  //content slider
  slider(clicked);
});
