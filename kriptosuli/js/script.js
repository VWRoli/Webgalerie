'use strict';
let theme = localStorage.getItem('theme');

const themeBtn = document.getElementById('change-theme');
const themeStyle = document.getElementById('theme-style');

//Dark mode functionality
themeBtn.addEventListener('click', function () {
  setTheme();
});

function setTheme() {
  if (themeStyle.getAttribute('href') === `css/light.css`) {
    dark = themeStyle.href = `css/dark.css`;
    localStorage.setItem('theme', dark);
  } else {
    light = themeStyle.href = `css/light.css`;
    localStorage.setItem('theme', light);
  }
}

///////////////////////////////////////////////////////////////////
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
