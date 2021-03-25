import "./styles.css";

document.getElementById("app").innerHTML = `
<div>
  
  <p>BTC ---> Dollar</p>
  <input value="" id="BTC">
  <input value="" id="DOLLAR" disabled>
</div>
`;

const btcDollar = 50000;

const BTC = document.querySelector("#BTC");
const dollar = document.querySelector("#DOLLAR");

BTC.addEventListener("input", updateValue);

function updateValue(e) {
  dollar.value = e.target.value * btcDollar;
}
