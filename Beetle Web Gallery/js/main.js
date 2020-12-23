'use strict';

const imgArr = [1, 2, 3];
let counter = 1;

//Change BG every 10 seconds
setInterval(function () {
  counter++;
  if (counter === 4) counter = 1;

  document.querySelector(
    '#showcase'
  ).style.background = `url(../images/showcase-bg-${counter}.jpg) no-repeat center/cover`;
}, 10000);
