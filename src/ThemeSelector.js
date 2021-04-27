export default class ThemeSelector {
  goDark() {
    document.body.classList.add("dark");
  }

  goLight() {
    document.body.classList.remove("dark");
  }

  create() {
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
      e.target.value === "light" ? this.goLight() : this.goDark();
    });
  }
}
