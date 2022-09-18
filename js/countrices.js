const loadCountrices = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

displayCountries = countries => {
    console.log(countries)
    const countryHTML = countries.map(country => getCountryHTML(country))
    console.log(countryHTML)
    const container = document.getElementById('countries');
    container.innerHTML = countryHTML.join(' ')
}

getCountryHTML = ({ name, flags, area }) => {
    return `
        <div class ="country">
        <h2>${name.common}</h2>
        <p>Area: ${area}</p>
        <img src="${flags.png}">
        </div>
        `
}

// option 1
// getCountryHTML = country => {
//     const { name, flags } = country;
//     return `
//     <div class ="country">
//     <h2>${name.common}</h2>
//     <img src="${flags.png}">
//     </div>
//     `
// }

// orginal 
// getCountryHTML = country => {
//     return `
//     <div class ="country">
//     <h2>${country.name.common}</h2>
//     <img src="${country.flags.png}">
//     </div>
//     `
// }

loadCountrices();