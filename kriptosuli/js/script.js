'use strict';
//Variables
const burgerIcon = document.querySelector('#burger-icon');
const navbarEl = document.querySelector('.navbar');

const themeStyle = document.querySelector('#theme-style');
const themeBtn = document.querySelector('.theme-btn');

//Toggle navbar
burgerIcon.addEventListener('click', function () {
  navbarEl.classList.toggle('active-nav');
});

//Change theme
let theme = localStorage.getItem('theme');

const setTheme = () => {
  if (themeBtn.checked) {
    themeStyle.href = 'css/dark.css';
    localStorage.setItem('theme', 'true');
  } else {
    themeStyle.href = 'css/style.css';
    localStorage.setItem('theme', 'false');
  }
};
//Get theme from localstorage
if (theme === 'true') themeBtn.setAttribute('checked', 'checked');
setTheme();

//Change theme with button
themeBtn.addEventListener('change', function () {
  setTheme();
});

///////////////////////////////////////////////////////////
//CoinGecko API
const tableBody = document.querySelector('.table-body');

const renderCoinData = function (coins) {
  console.log(coins);

  coins.forEach((coin) => {
    const html = `
    <tr class="tr-grid">
     <td class="coin-rank">${coin.market_cap_rank}</td>
     <td class="coin-icon"><img src="${coin.image}" alt="" /></td>
     <td class="coin-symbol">${coin.symbol.toUpperCase()}</td>
     <td class="coin-name">${coin.name}</td>
     <td class="coin-price">${coin.current_price}</td>
     <td class="coin-price-change">${coin.price_change_percentage_24h}</td>
     <td class="coin-supply">${coin.circulating_supply.toFixed(
       0
     )} ${coin.symbol.toUpperCase()}</td>
    </tr>
    `;
    tableBody.insertAdjacentHTML('beforeend', html);
  });
};

const getCoinMarkets = async function () {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
  );
  //if (!res.ok) throw new Error('Problem getting coin data');

  const data = await res.json();
  renderCoinData(data);
};
getCoinMarkets();
