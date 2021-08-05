import React from "react";
import ReactDOM from "react-dom";

import AppUserJWT from "./User Auth JWT Client/App";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div>
    <AppUserJWT />
  </div>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
