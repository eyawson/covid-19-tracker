console.log('Hello World!')
const deaths = document.getElementById('deaths')
const cases = document.getElementById('cases')
const recovered = document.getElementById('recovered')

const url = 'https://coronavirus-19-api.herokuapp.com/all'

fetch(url).then(response => {
    if (response.ok) {
        return response.json()
    }
    throw new Error('SNAFU! Nothing returned from the fetch request!')
}, networkError => {
    console.log(networkError.message)
}).then(data => {
    //console.log(data);
    deaths.innerHTML = data.deaths + ' or ' + ((100 * data.deaths) / data.cases).toFixed(2) + '%';
    cases.innerHTML = data.cases;
    recovered.innerHTML = data.recovered + ' or ' + ((100 * data.recovered) / data.cases).toFixed(2) + '%';
})