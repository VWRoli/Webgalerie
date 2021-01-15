'use strict';
//Variables
//? Accounts

class CreateAccount {
  constructor(firstName, username, password) {
    this.firstName = firstName;
    this.username = username;
    this.password = password;
  }
}
const roland = new CreateAccount('roland', 'roland', 1234);
const egon = new CreateAccount('egon', 'egon89', 4321);

const accounts = [roland, egon];

/////////////////////////////////////////////////////
let counter = 1;
const favEl = document.querySelector('.far');
const favElAll = document.querySelectorAll('.far');

//login, signup button variables
const btnLoginEL = document.querySelector('.btn-login');
const btnSignupEL = document.querySelector('.btn-signup');
const signupDisplay = document.querySelector('.signup-display');
const loginDisplay = document.querySelector('.login-display');
const signupOverlay = document.querySelector('.signup-overlay');
const loginContainer = document.querySelector('.login-container');
const innerLogin = document.querySelector('#inner-login-form');
const innerSignup = document.querySelector('#inner-signup-form');

//signup function variables
const submitSignupBtn = document.querySelector('#signup');
const submitSignupUsername = document.querySelector('#signup-username');
const submitSignupName = document.querySelector('#signup-name');
const submitSignupPass = document.querySelector('#signup-password');

//Login function variables
const inputLoginUsername = document.querySelector('#login-username');
const inputLoginPassword = document.querySelector('#login-password');
const btnLoginInner = document.querySelector('#login');
const showcase = document.querySelector('#showcase');
const welcome = document.querySelector('.welcome');
const personalMenu = document.querySelector('.personal-container');
const welcomeName = document.querySelector('.first-name');
const btnLogout = document.querySelector('.btn-logout');

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

//?Signup functionality

submitSignupBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const account3 = new CreateAccount(
    submitSignupName.value,
    submitSignupUsername.value,
    submitSignupPass.value
  );
  console.log(account3);
  accounts.push(account3);
  console.log(accounts);
  console.log('You can Log in now');
  signupOverlay.classList.add('hidden');
  signupDisplay.classList.add('hidden');
});

///////////////////////////////////////////////////

//?Login functionality

let currentAccount;

//Login button
btnLoginInner.addEventListener('click', function (e) {
  e.preventDefault();
  checkLoginCred();
});

//Check credentials
const checkLoginCred = function () {
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount.password.toString() === inputLoginPassword.value) {
    console.log('correct');
    toggleUI(currentAccount);
  } else {
    console.log('incorrect pass');
  }
};

//Display UI after login
const toggleUI = (acc) => {
  //Showcase
  signupOverlay.classList.add('hidden');
  loginDisplay.classList.add('hidden');

  showcase.classList.toggle('hidden');
  //disable login buttons
  loginContainer.classList.toggle('hidden');
  // Show personal menu
  personalMenu.classList.toggle('hidden');
  // Show Welcome message and logout button
  welcome.classList.toggle('hidden');
  if (acc === undefined) return;
  welcomeName.textContent = `${acc.firstName}`;
};

btnLogout.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('click');
  toggleUI();
});
