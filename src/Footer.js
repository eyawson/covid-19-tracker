import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer>
      <div id="social">
        <a href="/" aria-label="Go home">
          <i className="fas fa-home"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ebowyawson"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to my linkedin page"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.twitter.com/yawson_e"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to my twitter page"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.github.com/eyawson"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to my github page"
        >
          <i className="fab fa-github-alt"></i>
        </a>
        <p>
          <a
            href="https://www.cdc.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CDC Website
          </a>
        </p>
        <p>
          <a
            href="https://www.who.int/health-topics/coronavirus"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHO
          </a>
        </p>
        <p>
          <a
            href="https://www.worldometers.info/coronavirus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            More stats
          </a>
        </p>
        <p>
          <a
            href="https://github.com/javieraviles/covidAPI"
            target="_blank"
            rel="noopener noreferrer"
          >
            API: Build yours "\&#128521"
          </a>
        </p>
        <p>
          <a href="https://ebow.me" target="_blank" rel="noopener noreferrer">
            About me
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
