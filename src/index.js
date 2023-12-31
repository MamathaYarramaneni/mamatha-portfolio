import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "typeface-roboto";
import { BrowserRouter, Route, Switch, Link, Routes } from "react-router-dom";
import About from "./About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      {/* <Switch> */}
      <Routes>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      {/* </Switch> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
