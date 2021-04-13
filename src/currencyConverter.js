function create(fromCurrency, toCurrency, exchangeRate, id, parent) {
  let divWrapper = document.createElement("div");
  parent.appendChild(divWrapper);

  let header = document.createElement("p");
  header.innerHTML = fromCurrency + " ---> " + toCurrency;

  divWrapper.appendChild(header);

  let fromInput = document.createElement("input");
  fromInput.id = fromCurrency;

  let toInput = document.createElement("input");
  toInput.id = toCurrency;
  toInput.disabled = true;

  header.appendChild(fromInput);
  header.appendChild(toInput);

  fromInput.addEventListener("input", (e) => {
    toInput.value = e.target.value * exchangeRate;
  });
}

export { create };
