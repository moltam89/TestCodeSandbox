import "./styles.css";
import CurrencyConverter from "./currencyConverter.js";

let USD_BTC = new CurrencyConverter("USD", "HUF", 300, document.body);
USD_BTC.create();

let EUR_HUF = new CurrencyConverter("EUR", "HUF", 360, document.body);
EUR_HUF.create();

let USD_HUF = new CurrencyConverter("USD", "HUF", 300, document.body);
EUR_HUF.create();
