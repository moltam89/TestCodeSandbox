import "./styles.css";
import CurrencyConverter from "./CurrencyConverter.js";
import ThemeSelector from "./ThemeSelector";

let app = document.getElementById("app");

let themeSelector = new ThemeSelector(app);
themeSelector.create();

let USD_BTC = new CurrencyConverter("USD", "BTC", 50000, app);
USD_BTC.create();

let EUR_HUF = new CurrencyConverter("EUR", "HUF", 360, app);
EUR_HUF.create();

let USD_HUF = new CurrencyConverter("USD", "HUF", 300, app);
USD_HUF.create();
