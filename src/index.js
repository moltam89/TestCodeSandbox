import "./styles.css";
import CurrencyConverter from "./CurrencyConverter.js";
import ThemeSelector from "./ThemeSelector";

let app = document.getElementById("app");

let themeSelector = new ThemeSelector(app);
themeSelector.create();

let clickCount = 0;
let premiumMember = false;

function click() {
  removePremiumButton();

  clickCount++;

  if (clickCount > 4) {
    clickCount = 0;

    if (!premiumMember) {
      createPremiumButton();
    }
  }
}

function createPremiumButton() {
  let divWrapper = document.createElement("div");
  divWrapper.innerHTML = "You are using the free version!" + "<br />";

  divWrapper.id = "premiumButton";

  let button = document.createElement("button");
  button.innerHTML = "Premium";

  button.addEventListener("click", () => {
    premiumMember = true;
    goPremium();
    console.log("premium");
  });

  divWrapper.append(button);
  app.appendChild(divWrapper);
}

function goPremium() {
  removePremiumButton();

  let premiumSpan = document.createElement("span");
  premiumSpan.innerHTML = "You are a premium member!";

  app.appendChild(premiumSpan);
}

function removePremiumButton() {
  let premiumButton = document.getElementById("premiumButton");

  if (premiumButton) {
    app.removeChild(premiumButton);
  }
}

let USD_BTC = new CurrencyConverter("USD", "BTC", 50000, app, click);
USD_BTC.create();

let EUR_HUF = new CurrencyConverter("EUR", "HUF", 360, app, click);
EUR_HUF.create();

let USD_HUF = new CurrencyConverter("USD", "HUF", 300, app, click);
USD_HUF.create();
