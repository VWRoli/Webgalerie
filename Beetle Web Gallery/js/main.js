'use strict';
const imgArr = [1, 2, 3];
let counter = 1;
const favEl = document.querySelector('.far');
const favElAll = document.querySelectorAll('.far');

//Change BG every 10 seconds
setInterval(function () {
  counter++;
  if (counter === 4) counter = 1;

  document.querySelector(
    '#showcase'
  ).style.background = `url(../images/showcase-bg-${counter}.jpg) no-repeat center/cover`;
}, 10000);

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
