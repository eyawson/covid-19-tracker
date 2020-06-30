import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Main from "./Main";
import Search from "./Search";
// import SelectCountries from "./selectCountries";
import About from "./About";
import Footer from "./Footer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Search />
    <Main />
    {/* <SelectCountries /> */}
    <About />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
