export default class CurrencyConverter {
  constructor(fromCurrency, toCurrency, exchangeRate, parent, click) {
    this.fromCurrency = fromCurrency;
    this.toCurrency = toCurrency;
    this.exchangeRate = exchangeRate;
    this.parent = parent;
    this.click = click;
  }

  onClick() {
    this.click();
  }

  create() {
    let divWrapper = document.createElement("div");
    divWrapper.classList.add("currency");

    this.parent.appendChild(divWrapper);

    let header = document.createElement("span");
    header.innerHTML =
      this.fromCurrency + " > " + this.toCurrency + "<br />" + "<br />";

    divWrapper.appendChild(header);

    divWrapper.appendChild(document.createElement("p"));

    let fromInput = document.createElement("input");

    fromInput.setAttribute("type", "number");
    fromInput.setAttribute("value", 0);
    fromInput.setAttribute("min", 0);
    fromInput.setAttribute("oninput", "this.value = Math.abs(this.value)");

    let toInput = document.createElement("input");
    toInput.setAttribute("value", 0);
    toInput.disabled = true;

    header.appendChild(fromInput);

    let fromLabel = document.createElement("label");
    fromLabel.innerHTML = this.fromCurrency;
    fromLabel.setAttribute("for", this.fromCurrency);
    header.appendChild(fromLabel);

    header.appendChild(toInput);

    let toLabel = document.createElement("label");
    toLabel.innerHTML = this.toCurrency;
    toLabel.setAttribute("for", this.toCurrency);
    header.appendChild(toLabel);

    fromInput.addEventListener("input", (e) => {
      toInput.value = e.target.value * this.exchangeRate;
    });

    fromInput.addEventListener("click", () => {
      this.click();
    });
  }
}
