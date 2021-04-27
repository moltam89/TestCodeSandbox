export default class ThemeSelector {
  constructor(app) {
    this.app = app;
  }

  goDark() {
    document.body.classList.add("dark");
  }

  goLight() {
    document.body.classList.remove("dark");
  }

  create() {
    let div = document.createElement("div");

    let themeSelector = document.createElement("select");

    this.app.appendChild(div);
    div.appendChild(themeSelector);

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
