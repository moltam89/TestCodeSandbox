import "./styles.css";
import CurrencyConverter from "./CurrencyConverter.js";
import ThemeSelector from "./ThemeSelector";

let app = document.getElementById("app");

let USD_BTC = new CurrencyConverter("USD", "HUF", 300, app);
USD_BTC.create();

let EUR_HUF = new CurrencyConverter("EUR", "HUF", 360, app);
EUR_HUF.create();

let USD_HUF = new CurrencyConverter("USD", "HUF", 300, app);
EUR_HUF.create();

let themeSelector = new ThemeSelector();
themeSelector.create();
