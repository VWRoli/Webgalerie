'use strict';
let counter = 1;
const favEl = document.querySelector('.far');
const favElAll = document.querySelectorAll('.far');

//Change BG every 10 seconds
setInterval(function () {
  counter < 3 ? counter++ : counter = 1;
  /* counter++;
  counter === 4 ? counter = 1 : counter = counter; */
  document.querySelector(
    '#showcase'
  ).style.background = `url(./images/showcase-bg-${counter}.jpg)`;
}, 3000);

//Favorite Button
for (let i = 0; i < favElAll.length; i++) {
  favElAll[i].addEventListener('click', function () {
    this.classList.toggle('fav-scale');
    if (this.style.color === '') {
      this.style.color = `var(--primary-btn-color)`;
    } else {
      this.style.color = ``;
    }
  });
}
