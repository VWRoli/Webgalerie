'use strict';

const tableBody = document.querySelector('.table-body');
const coinPriceChangeLabel = document.querySelector('.coin-price-change');

const marketTable = document.querySelector('.market-table');
const hideMarketBtn = document.querySelector('.hide-market-btn');

//Toggle market price table
hideMarketBtn.addEventListener('click', function () {
  if (hideMarketBtn === null) return;
  marketTable.classList.toggle('visibility');
});
////////////////////////////////////////////////////////////
//CoinGecko API
//Get data from CoinGecko
const getCoinMarkets = async function () {
  try {
    const res = await fetch(
      `1https://api.coingecko.com/api/v3/coins/markets?vs_currency=huf&order=market_cap_desc&per_page=10&page=1&sparkline=false`
    );
    if (!res.ok)
      throw new Error(
        'Problem getting coin data. Please refresh the page, or try again later!'
      );

    const data = await res.json();
    renderCoinData(data);
  } catch (err) {
    renderError(`${err.message}`);
  }
};
getCoinMarkets();

//Render error
const renderError = function (msg) {
  tableBody.insertAdjacentText('beforeend', msg);
};

//Render data
const renderCoinData = function (coins) {
  coins.forEach((coin) => {
    //Format price
    const price = priceFormatter(coin.current_price);

    //Format price change
    const priceChange = priceChangeFormatter(coin.price_change_percentage_24h);
    //Price change color
    const type = coin.price_change_percentage_24h > 0 ? `positive` : `negative`;

    //Format supply
    const supply = supplyFormatter(coin.circulating_supply);

    //Display table
    const html = `
      <tr class="tr-grid">
       <td class="coin-rank">${coin.market_cap_rank}</td>
       <td class="coin-icon"><img src="${coin.image}" alt="" /></td>
       <td class="coin-symbol">${coin.symbol.toUpperCase()}</td>
       <td class="coin-name">${coin.name}</td>
       <td class="coin-price">${price}</td>
       <td class="coin-price-change ${type}">${priceChange}</td>
       <td class="coin-supply">${supply} ${coin.symbol.toUpperCase()}</td>
      </tr>
      `;
    tableBody.insertAdjacentHTML('beforeend', html);
  });
};
//Formatter functions
//Format supply
const supplyFormatter = (supply) => {
  const formattedSupply = new Intl.NumberFormat('hu-HU', {
    notation: 'compact',
    compactDisplay: 'long',
  }).format(supply);
  return formattedSupply;
};
//Format Price Change
const priceChangeFormatter = (priceChange) => {
  const formattedPriceChange = new Intl.NumberFormat('hu-HU', {
    style: 'percent',
    signDisplay: 'exceptZero',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(priceChange / 100);

  return formattedPriceChange;
};
//Format price
const priceFormatter = (price) => {
  const formattedPrice = new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  return formattedPrice;
};
