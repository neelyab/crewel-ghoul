import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.querySelector("#react-app");
if (root) {
  ReactDOM.render(<App />, root);
}
