'use strict';
//Variables
const burgerIcon = document.querySelector('#burger-icon');
const navbarEl = document.querySelector('.navbar');

//Toggle navbar
burgerIcon.addEventListener('click', function () {
  navbarEl.classList.toggle('active-nav');
});

/* 
$(document).ready(function () {
  $('.burger-nav').on('click', function () {
    $('.mobile-nav ul').toggleClass('open');
  });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 */
