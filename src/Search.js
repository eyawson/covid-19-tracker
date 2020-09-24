// Under construction

import React, { useState, useEffect, Fragment } from "react";
// best practices handling css?
import "./App.css";

const byCountry = "https://coronavirus-19-api.herokuapp.com/countries/";
const initialCountry = "USA";

const Search = () => {
  const [search, searchData] = useState("");

  // on page load there is an initial search state
  const [query, setQuery] = useState(initialCountry);

  // this updates searchQuery hook with a manual search target value
  const [url, setUrl] = useState(byCountry + initialCountry);

  //  Loding indicators? Ah yes it is cool. Me thinks of it like a try/catch
  const [isLoading, setIsLoading] = useState(false);

  // Error handling
  const [isError, setError] = useState(false);

  async function fetchData() {
    try {
      const res = await fetch(url);
      setError(false);
      setIsLoading(true);

      const results = await res.json();
      searchData(results);
    } catch (error) {
      setError(true);
      // had to clear search results. Might be a better way lol
      searchData("");
    }
    setIsLoading(false);
  }

  useEffect(
    () => {
      fetchData();
    },
    [url]
  );

  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          setUrl(byCountry + query);
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          required
        />
        <div>
          <button type="submit">Search</button>
        </div>
      </form>

      {isError && <p className="warn">Hmmm something is not right ...</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
          <section id="results">
            {/*  TODO: Change to a table */}
            <p className="case">Total Cases: {search.cases}</p>
            <p className="test">Total Tests: {search.totalTests}</p>
            <p className="newCase">New: {search.todayCases}</p>
            <p className="recovered">Recovered: {search.recovered}</p>
            <p className="active">Active: {search.active}</p>
            <p className="critical">Critical: {search.critical}</p>
            <p className="deathTotal">Deaths: {search.deaths}</p>
          </section>
        )}
    </Fragment>
  );
};

export default Search;
