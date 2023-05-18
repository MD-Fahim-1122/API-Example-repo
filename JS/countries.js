const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries => {
    console.log(countries)
    const countryContainer = document.getElementById('all-countries')

    // for (const country of countries) {
    //     console.log(country.name.common)
    countries.forEach(country => {
        console.log(country);

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3> Name : ${country.name.common} </h3>
        <p> Capital : ${country.capital ? country.capital[0] : 'no capital'}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);
    })


    

})

const loadCountryDetails = code =>{
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res=> res. json())
    .then(data => showCountryDetail(data[0]))

}

const showCountryDetail = country =>{
    detailContainer = document.getElementById('country-details')
    detailContainer.innerHTML = `
    <h3>Name :${country.name.common}</h3>
    <img src="${country.flags.png}">
    `
}


loadCountries();










