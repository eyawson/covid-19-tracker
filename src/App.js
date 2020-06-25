import React from "react";
import "./App.css";
import $ from "jquery";

function App() {
  $(document).ready(() => {
    const $menuButton = $(".menuButton");
    const $dropDown = $("#dropDown");
    const $warning = $(".warn");

    $menuButton.on("click", () => {
      $dropDown.slideToggle();
      $warning.fadeOut(400);
    });
  });
  return (
    <div className="App">
      <header>
        <a className="menuButton">
          <i className="fas fa-bars"></i>
        </a>
        <span>
          <h1>Covid-19 Worldwide stats</h1>
        </span>
      </header>
      <nav>
        <div className="hide" id="dropDown">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a
                href="https://www.cdc.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CDC Website
              </a>
            </li>
            <li>
              <a
                href="https://www.who.int/health-topics/coronavirus"
                target="_blank"
                rel="noopener noreferrer"
              >
                WHO
              </a>
            </li>
            <li>
              <a
                href="https://www.worldometers.info/coronavirus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                More stats
              </a>
            </li>
            <li>
              <a
                href="https://ebow.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                About me
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <p className="warn">disclaimer: mobile ready only atm</p>
    </div>
  );
}

export default App;
