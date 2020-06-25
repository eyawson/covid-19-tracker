import React from "react";
import "./App.css";

const About = () => {
  return (
    <div>
      <section id="about">
        <h2>What is the Coronavirus?</h2>
        <p>
          Coronaviruses (CoV) are a large family of viruses that cause illness
          ranging from the common cold to more severe diseases such as Middle
          East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory
          Syndrome (SARS-CoV).
        </p>
        <p>
          Coronavirus disease (COVID-19) is a new strain that was discovered in
          2019 and has not been previously identified in humans.
        </p>
      </section>
      <section id="symptoms">
        <h2>Symptoms 2-14 days after exposure:</h2>
        <ul>
          <li>
            Fever{" "}
            <span className="">
              <i className="fas fa-temperature-high"></i>
            </span>
          </li>
          <li>
            Cough{" "}
            <span>
              <i className="fas fa-head-side-cough"></i>
            </span>
          </li>
          <li>Shortness of breath</li>
        </ul>
      </section>
      <section id="symptoms">
        <h2>How to protect yourself:</h2>
        <ul>
          <li>
            Clean hands often{" "}
            <span>
              <i className="fas fa-hands-wash"></i>
            </span>
          </li>
          <li>
            Avoid close contact{" "}
            <span>
              <i className="fas fa-people-arrows"></i>
            </span>
          </li>
          <li>
            Stay home if you are sick{" "}
            <span>
              <i className="fas fa-house-user"></i>
            </span>
          </li>
        </ul>
      </section>
      <section id="symptoms">
        <h2>Seek medical attention if you have:</h2>
        <ul>
          <li>Difficulty breathing or shortness of breath</li>
          <li>Persistent pain or pressure in the chest</li>
          <li>New confusion or inability to arouse</li>
          <li>Bluish lips or face</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
