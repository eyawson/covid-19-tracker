import React, { useState, useEffect } from "react";
//import logo from './logo.svg';
import "./App.css";

const allCasesUrl = "https://coronavirus-19-api.herokuapp.com/all";

const Main = () => {
  const [data, setData] = useState({});

  async function fetchData() {
    const res = await fetch(allCasesUrl);
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <main>
        <div id="case">
          <h2>Cases:</h2>
          <h3 id="cases">{data.cases}</h3>
        </div>
        <div id="recovery">
          <h2>Recovered:</h2>
          <h3 id="recovered">
            {data.deaths +
              " or " +
              ((100 * data.deaths) / data.cases).toFixed(2) +
              "%"}
          </h3>
        </div>
        <div id="dead">
          <h2>Deaths:</h2>
          <h3 id="deaths">
            {data.recovered +
              " or " +
              ((100 * data.recovered) / data.cases).toFixed(2) +
              "%"}
          </h3>
        </div>
      </main>
    </div>
  );
};

export default Main;
