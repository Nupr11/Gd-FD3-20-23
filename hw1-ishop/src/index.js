import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { myProducts, SHOP_NAME } from "./products.js";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App myShop={SHOP_NAME} myProducts={myProducts} />);

// метод reactdom подразумевает concurentmode
// root.render ожидает только один корневой элемент. => во что оборачивать компоненты? <></> фрагмент или sctrict mode
// или разбивать на отдельные узлы dom]]]]]]]]]
