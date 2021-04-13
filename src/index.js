import "./styles.css";
import { create } from "./currencyConverter.js";

create("USD", "BTC", 500000, document.body);

create("EUR", "HUF", 360, document.body);
