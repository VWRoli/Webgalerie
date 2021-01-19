'use strict';
//Variables
const rolandImages = [];
const klausImages = [
  {
    imgLink: `https://source.unsplash.com/Fp7qRMsOB0s`,
    owner: 'klaus',
    width: 1,
    height: 1,
  },
  {
    imgLink: `https://source.unsplash.com/pgpRhbXJ8YY/`,
    owner: 'klaus',
    width: 1,
    height: 1,
  },
  {
    imgLink: `https://source.unsplash.com/I0bAF8ITe5Y/`,
    owner: 'klaus',
    width: 1,
    height: 2,
  },
  {
    imgLink: `https://source.unsplash.com/eDnW0H-dg-k/`,
    owner: 'klaus',
    width: 1,
    height: 1,
  },
  {
    imgLink: `https://source.unsplash.com/cFDHzhNLTPg/`,
    owner: 'klaus',
    width: 1,
    height: 1,
  },
  {
    imgLink: `https://source.unsplash.com/SqT01553Fbg/`,
    owner: 'klaus',
    width: 1,
    height: 1,
  },
];

const marthaImages = [
  {
    imgLink: `https://source.unsplash.com/hVk6pIFbW9o`,
    owner: 'martha',
    width: 2,
    height: 2,
  },
  {
    imgLink: `https://source.unsplash.com/3yzE1SUfbwY/`,
    owner: 'martha',
    width: 1,
    height: 2,
  },
  {
    imgLink: `https://source.unsplash.com/6Woj_fIzn5g/`,
    owner: 'martha',
    width: 3,
    height: 2,
  },
];

const danielImages = [
  {
    imgLink: `https://source.unsplash.com/wyI1e5VM96o`,
    owner: 'daniel',
    width: 1,
    height: 2,
  },
  {
    imgLink: `https://source.unsplash.com/vSgINvbunfo/`,
    owner: 'daniel',
    width: 1,
    height: 1,
  },
  {
    imgLink: `https://source.unsplash.com/iO4QILyNEbE/`,
    owner: 'daniel',
    width: 1,
    height: 1,
  },
  {
    imgLink: `https://source.unsplash.com/Bnk9CwTVtL8/`,
    owner: 'daniel',
    width: 1,
    height: 1,
  },
  {
    imgLink: `https://source.unsplash.com/iTzKdV8TNOU/`,
    owner: 'daniel',
    width: 1,
    height: 2,
  },
  {
    imgLink: `https://source.unsplash.com/WWwyh_zt6lk/`,
    owner: 'daniel',
    width: 1,
    height: 1,
  },
  {
    imgLink: `https://source.unsplash.com/5D6HXfo-uZs/`,
    owner: 'daniel',
    width: 1,
    height: 1,
  },
  {
    imgLink: `https://source.unsplash.com/ol1dX9NkjEI/`,
    owner: 'daniel',
    width: 1,
    height: 1,
  },
  {
    imgLink: `https://source.unsplash.com/nMtmO54EK2Y/`,
    owner: 'daniel',
    width: 1,
    height: 1,
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
const roland = new CreateAccount('roland', 'roland', 1234, rolandImages);
const klaus = new CreateAccount('klaus', 'klaus89', 4321, klausImages);
const martha = new CreateAccount('martha', 'martha', 1111, marthaImages);
const daniel = new CreateAccount('daniel', 'daniel', 2222, danielImages);

const accounts = [roland, klaus, martha, daniel];

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
const personalContainer = document.querySelector('.personal-container');
const welcomeName = document.querySelector('.first-name');
const btnLogout = document.querySelector('.btn-logout');
const loginMessage = document.querySelector('.login-message');

//Image gallery
const galleryContainer = document.querySelector('.gallery-container');
const landing = document.querySelector('.landing');

const personalMenu = document.querySelector('.personal-menu');
const menuItems = document.querySelectorAll('.menu-item');

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
  switchforms();
});

innerSignup.addEventListener('click', function (e) {
  switchforms();
});

///////////////////////////////////////////////////

//?Signup functionality

submitSignupBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let newAccount;
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
    newAccount = new CreateAccount(
      submitSignupName.value,
      submitSignupUsername.value,
      submitSignupPass.value,
      []
    );
    loginMessage.classList.remove('hidden');
    signupDisplay.classList.add('hidden');

    accounts.push(newAccount);
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
    toggleUI(currentAccount);
  } else {
    //todo /////////////////////////////////////////////
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
  personalContainer.classList.toggle('hidden');
  //show pictures showcase
  if (personalContainer.classList.contains('hidden')) {
    showcase.classList.remove('hidden');
    galleryContainer.classList.add('hidden');
    landing.style.height = '100vh';
  } else {
    showUploadedImages(acc.images);
  }
  // Show Welcome message and logout button
  welcome.classList.toggle('hidden');
  if (acc === undefined) return;
  welcomeName.textContent = `${acc.firstName}`;
};

btnLogout.addEventListener('click', function (e) {
  e.preventDefault();
  toggleUI();
});

//Personal menu tabs
personalMenu.addEventListener('click', function (e) {
  const clicked = e.target;
  const id = clicked.id;

  if (clicked.classList.contains('menu-item')) {
    menuItems.forEach((item) => item.classList.remove('active-menu'));
    clicked.classList.add('active-menu');
  }

  if (id === `uploads`) showUploadedImages(currentAccount.images);
  if (id === `all-photos`) showAllImages(accounts);
});

//Show uploaded images tab
const showUploadedImages = function (images) {
  galleryContainer.innerHTML = '';
  galleryContainer.classList.remove('hidden');
  landing.style.height = 'fit-content';

  if (images === undefined) return;

  images.forEach(function (image) {
    const html = `
    <div class="gallery-item w-${image.width} h-${image.height}">
    <div class="image">
    <img src="${image.imgLink}" alt="" />
    </div>
    <div class="controls">
    <p><a href="#" class="user">${image.owner}</a></p>
    <i class="far fa-star"></i>
    </div>
    </div>`;
    galleryContainer.insertAdjacentHTML('beforeend', html);
  });
};

//Show all images tab
const showAllImages = function (accounts) {
  galleryContainer.innerHTML = '';
  galleryContainer.classList.remove('hidden');
  landing.style.height = 'fit-content';

  accounts.forEach(function (acc) {
    acc.images.forEach((image) => {
      const html = `
      <div class="gallery-item w-${image.width} h-${image.height}">
      <div class="image">
      <img src="${image.imgLink}" alt="" />
      </div>
      <div class="controls">
      <p><a href="#" class="user">${image.owner}</a></p>
      <i class="far fa-star"></i>
      </div>
      </div>`;
      galleryContainer.insertAdjacentHTML('beforeend', html);
    });
  });
};
