$(document).ready(() => {
  const $menuButton = $(".menuButton");
  const $dropDown = $("#dropDown");
  const $warning = $(".warn");

  $menuButton.on("click", () => {
    $dropDown.slideToggle();
    $warning.fadeOut(400);
  });
});

//console.log('Hello World!')
const deaths = document.getElementById("deaths");
const cases = document.getElementById("cases");
const recovered = document.getElementById("recovered");
let state = document.getElementById("country");
let stateB = document.getElementById("country2");
let p = document.createElement("p");
let gh = document.createElement("p");

const url = "https://coronavirus-19-api.herokuapp.com/all";
const countryUrl = "https://coronavirus-19-api.herokuapp.com/countries/";
let country;

const getData = () => {
  fetch(url)
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("SNAFU! Nothing returned from the fetch request!");
      },
      networkError => {
        console.log(networkError.message);
      }
    )
    .then(data => {
      //console.log(data);
      deaths.innerHTML =
        data.deaths +
        " or " +
        ((100 * data.deaths) / data.cases).toFixed(2) +
        "%";
      cases.innerHTML = data.cases;
      recovered.innerHTML =
        data.recovered +
        " or " +
        ((100 * data.recovered) / data.cases).toFixed(2) +
        "%";
    });
};

getData();

const getUsaData = () => {
  country = "USA";
  const national = countryUrl + country;
  fetch(national)
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("SNAFU! Nothing returned from the fetch request!");
      },
      networkError => {
        console.log(networkError.message);
      }
    )
    .then(countryData => {
      //console.log(countryData);
      p.innerHTML =
        countryData.country +
        ": " +
        "Total: " +
        countryData.cases +
        " | " +
        "Deaths: " +
        countryData.deaths +
        " | " +
        "New: " +
        countryData.todayCases;
      state.appendChild(p);
    });
};

getUsaData();

const getGhanaData = () => {
  country = "Ghana";
  const national = countryUrl + country;
  fetch(national)
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("SNAFU! Nothing returned from the fetch request!");
      },
      networkError => {
        console.log(networkError.message);
      }
    )
    .then(ghanaData => {
      //console.log(ghanaData);
      gh.innerHTML =
        ghanaData.country +
        ": " +
        "Total: " +
        ghanaData.cases +
        " | " +
        "Deaths: " +
        ghanaData.deaths +
        " | " +
        "New: " +
        ghanaData.todayCases;
      stateB.appendChild(gh);
    });
};

getGhanaData();
