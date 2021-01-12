'use strict';
//Variables
let counter = 1;
const favEl = document.querySelector('.far');
const favElAll = document.querySelectorAll('.far');
//login, signup
const btnLoginEL = document.querySelector('.btn-login');
const btnSignupEL = document.querySelector('.btn-signup');
const signupDisplay = document.querySelector('.signup-display');
const loginDisplay = document.querySelector('.login-display');
const signupOverlay = document.querySelector('.signup-overlay');
const loginContainer = document.querySelector('.login-container');
const innerLogin = document.querySelector('#inner-login-form');
const innerSignup = document.querySelector('#inner-signup-form');

//Change BG every 10 seconds
setInterval(function () {
  counter < 3 ? counter++ : (counter = 1);
  document.querySelector(
    '#showcase'
  ).style.background = `url(./images/showcase-bg-${counter}.jpg) no-repeat center/cover`;
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
//////////////////////////////////////////////////
//Login and Signup Button

loginContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const login = e.target.classList.contains(`btn-login`);
  if (login) {
    //Open login form
    loginDisplay.classList.remove('hidden');
    signupOverlay.classList.remove('hidden');
  } else {
    //Open signup form
    signupDisplay.classList.remove('hidden');
    signupOverlay.classList.remove('hidden');
  }
});
signupOverlay.addEventListener('click', function () {
  signupOverlay.classList.add('hidden');
  loginDisplay.classList.add('hidden');
  signupDisplay.classList.add('hidden');
});
//
const switchforms = () => {
  signupDisplay.classList.toggle('hidden');
  loginDisplay.classList.toggle('hidden');
};
innerLogin.addEventListener('click', function (e) {
  //e.preventDefault();
  switchforms();
});

innerSignup.addEventListener('click', function (e) {
  //e.preventDefault();
  switchforms();
});
///////////////////////////////////////////////////
//? Accounts
const account1 = {
  firstName: 'Roland',
  username: 'roland',
  password: '1234',
};
const account2 = {
  firstName: 'Egon',
  username: 'egon89',
  password: '4321',
};
const account3 = {
  firstName: 'Sarah',
  username: 'sarah123',
  password: '9876',
};
const account4 = {
  firstName: 'Jonas',
  username: 'jonas1',
  password: '6789',
};

const accounts = [account1, account2, account3, account4];

//?Login functionality
const inputLoginUsername = document.querySelector('#login-username');
const inputLoginPassword = document.querySelector('#login-password');
const btnLoginInner = document.querySelector('#login');
const showcase = document.querySelector('#showcase');

let currentAccount;
btnLoginInner.addEventListener('click', function (e) {
  e.preventDefault();
  checkLoginCred();
});

const checkLoginCred = function () {
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount.password === inputLoginPassword.value) {
    console.log('correct');
    showcase.classList.add('hidden');

    signupOverlay.classList.add('hidden');
    loginDisplay.classList.add('hidden');
  } else {
    console.log('incorrect pass');
  }
};
