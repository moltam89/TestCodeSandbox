function create(fromCurrency, toCurrency, exchangeRate, parent) {
  let divWrapper = document.createElement("div");

  parent.appendChild(divWrapper);

  let header = document.createElement("span");
  header.innerHTML = fromCurrency + " > " + toCurrency + "<br />";

  divWrapper.appendChild(header);

  divWrapper.appendChild(document.createElement("p"));

  let fromInput = document.createElement("input");

  fromInput.setAttribute("type", "number");
  fromInput.setAttribute("value", 0);

  let toInput = document.createElement("input");
  toInput.disabled = true;

  header.appendChild(fromInput);

  let fromLabel = document.createElement("label");
  fromLabel.innerHTML = fromCurrency;
  fromLabel.setAttribute("for", fromCurrency);
  header.appendChild(fromLabel);

  header.appendChild(toInput);

  let toLabel = document.createElement("label");
  toLabel.innerHTML = toCurrency;
  toLabel.setAttribute("for", toCurrency);
  header.appendChild(toLabel);

  fromInput.addEventListener("input", (e) => {
    toInput.value = e.target.value * exchangeRate;
  });
}

export { create };
