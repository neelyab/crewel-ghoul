import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.css";

const root = document.querySelector("#react-app");
if (root) {
  ReactDOM.render(<App />, root);
}
