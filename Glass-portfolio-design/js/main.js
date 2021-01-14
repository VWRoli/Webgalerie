'use strict';

//Content slider
const content = document.querySelectorAll('.content');

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

mainPageBtn.addEventListener('click', function () {
  slide(0);
});
projectsBtn.addEventListener('click', function () {
  slide(-100);
});
detailsBtn.addEventListener('click', function () {
  slide(-200);
});

//menu-nav
mainPageBtn.classList.add('active-menu');

const menuElAll = document.querySelector('.menu-nav');
const menuBtn = document.querySelectorAll('.menu-btn');

menuElAll.addEventListener('click', function (e) {
  const clicked = e.target.closest('li');
  console.log(clicked);

  if (!clicked) return;

  menuBtn.forEach((btn) => btn.classList.remove('active-menu'));
  clicked.classList.add('active-menu');
});
