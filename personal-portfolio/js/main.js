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
