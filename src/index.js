import "./styles.css";
import CurrencyConverter from "./currencyConverter.js";

let USD_BTC = new CurrencyConverter("USD", "HUF", 300, document.body);
USD_BTC.create();

let EUR_HUF = new CurrencyConverter("EUR", "HUF", 360, document.body);
EUR_HUF.create();

let USD_HUF = new CurrencyConverter("USD", "HUF", 300, document.body);
EUR_HUF.create();

let goDark = function () {
  document.body.classList.add("dark");
};

let goLight = function () {
  document.body.classList.remove("dark");
};

let themeSelector = document.createElement("select");

document.body.appendChild(themeSelector);

let lightOption = document.createElement("option");
lightOption.innerHTML = "Light";
lightOption.setAttribute("value", "light");

let darkOption = document.createElement("option");
darkOption.innerHTML = "Dark";
darkOption.setAttribute("value", "dark");

themeSelector.appendChild(lightOption);
themeSelector.appendChild(darkOption);

themeSelector.addEventListener("change", (e) => {
  e.target.value === "light" ? goLight() : goDark();
});
