/* ==============================
   LIVE CURRENCY SYSTEM
   ============================== */

// Base currency (USD recommended)
let CURRENCY_RATES = {
  USD: 1
};

// Common currencies (expandable automatically by API)
const SUPPORTED_CURRENCIES = [
  "USD","MMK","THB","EUR","AUD","GBP","JPY","CNY","SGD",
  "KRW","INR","CAD","NZD","CHF","SEK","NOK","DKK",
  "MYR","IDR","PHP","VND","LAK","KHR"
];

// Free exchange-rate API (no key required)
const CURRENCY_API =
  "https://open.er-api.com/v6/latest/USD";

/* Fetch live currency rates */
async function loadCurrencyRates() {
  try {
    const res = await fetch(CURRENCY_API);
    const data = await res.json();

    if (data && data.rates) {
      CURRENCY_RATES = data.rates;

      // Cache for offline use
      localStorage.setItem(
        "currencyRates",
        JSON.stringify(CURRENCY_RATES)
      );

      console.log("Currency rates updated");
    }
  } catch (e) {
    console.warn("Using cached currency rates");

    const cached = localStorage.getItem("currencyRates");
    if (cached) {
      CURRENCY_RATES = JSON.parse(cached);
    }
  }
}

/* Convert currency */
function convertCurrency(value, from, to) {
  if (!CURRENCY_RATES[from] || !CURRENCY_RATES[to]) return 0;

  return value * (CURRENCY_RATES[to] / CURRENCY_RATES[from]);
}

/* Load rates immediately */
loadCurrencyRates();

/* ==============================
   KAREN CUSTOM UNITS
   ============================== */

const KAREN_UNITS = {
  riceBasket: {
    base: "kg",
    value: 25,
    label_en: "Rice Basket",
    label_kar: "ဟုသးဃာ်"
  },
  bambooLength: {
    base: "m",
    value: 2.5,
    label_en: "Bamboo Length",
    label_kar: "၀ၣ်အယံၤအထီ"
  },
  farmPlot: {
    base: "m2",
    value: 400,
    label_en: "Farm Plot",
    label_kar: "စံာ်ပျီ"
  }
};

/* Convert Karen custom unit to base unit */
function convertKarenUnit(value, unitKey) {
  if (!KAREN_UNITS[unitKey]) return 0;
  return value * KAREN_UNITS[unitKey].value;
}
