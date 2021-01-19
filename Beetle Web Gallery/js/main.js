'use strict';
//Variables
//? Accounts
const klausImages = [
  {
    imgLink: `<img src="https://source.unsplash.com/Fp7qRMsOB0s/" alt=""/>`,
    owner: 'klaus',
    width: 2,
    height: 2,
  },
  {
    imgLink: `<img src="https://source.unsplash.com/pgpRhbXJ8YY/" alt=""/>`,
    owner: 'klaus',
    width: 1,
    height: 2,
  },
  {
    imgLink: `<img src="https://source.unsplash.com/I0bAF8ITe5Y/" alt=""/>`,
    owner: 'klaus',
    width: 1,
    height: 4,
  },
  {
    imgLink: `<img src="https://source.unsplash.com/eDnW0H-dg-k/" alt=""/>`,
    owner: 'klaus',
    width: 2,
    height: 3,
  },
  {
    imgLink: `<img src="https://source.unsplash.com/cFDHzhNLTPg/" alt=""/>`,
    owner: 'klaus',
    width: 1,
    height: 3,
  },
  {
    imgLink: `<img src="https://source.unsplash.com/SqT01553Fbg/" alt=""/>`,
    owner: 'klaus',
    width: 2,
    height: 2,
  },
];

class CreateAccount {
  constructor(firstName, username, password, images) {
    this.firstName = firstName;
    this.username = username;
    this.password = password;
    this.images = images;
  }
}
const roland = new CreateAccount('roland', 'roland', 1234);
const klaus = new CreateAccount('klaus', 'klaus89', 4321, klausImages);

const accounts = [roland, klaus];

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
const loginMessage = document.querySelector('.login-message');

//Image gallery
const galleryContainer = document.querySelector('.gallery-container');

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
  let account3;
  //Fill in the form
  if (
    submitSignupName.value === '' &&
    submitSignupUsername.value === '' &&
    submitSignupPass.value === ''
  ) {
    submitSignupName.style.background = `var(--tertiary-hover-btn-color)`;
    submitSignupUsername.style.background = `var(--tertiary-hover-btn-color)`;
    submitSignupPass.style.background = `var(--tertiary-hover-btn-color)`;
  } else {
    //If form filled, create account
    account3 = new CreateAccount(
      submitSignupName.value,
      submitSignupUsername.value,
      submitSignupPass.value
    );
    console.log('You can Log in now');
    loginMessage.classList.remove('hidden');
    signupDisplay.classList.add('hidden');
    //signupDisplay.textContent = 'Sie können sich jetzt anmelden';

    console.log(account3);
    accounts.push(account3);
    console.log(accounts);
    setTimeout(function () {
      signupOverlay.classList.add('hidden');
      signupDisplay.classList.add('hidden');
      loginMessage.classList.add('hidden');
    }, 1000);
  }
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
    console.log(currentAccount);
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
  showImages();
  // Show Welcome message and logout button
  welcome.classList.toggle('hidden');
  if (acc === undefined) return;
  welcomeName.textContent = `${acc.firstName}`;
};

btnLogout.addEventListener('click', function (e) {
  e.preventDefault();
  toggleUI();
});

const showImages = function () {
  galleryContainer.classList.remove('hidden');
  document.querySelector('.landing').style.height = 'fit-content';
};
