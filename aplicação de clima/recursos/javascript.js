// api
const apiKey = "2a33be34475277c88283900f4b59c67c";
const apiCountryURL = "https://countryflagsapi.com/png/";


//variáveis
const cityInput = document.querySelector('.city-input');
const btnSearch = document.querySelector('.search');
const weatherContainer = document.querySelector('.weather-data');

const cityElement = document.querySelector('.city');
const tempElement = document.querySelector('.temperature span');
const descElement = document.querySelector('.description');
const weatherIconElement = document.querySelector('.weather-icon');
const countryElement = document.querySelector('.country');
const humidityElement = document.querySelector('.humidity span');
const windElement = document.querySelector('.wind span');


//funções
const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    console.log(data);
    return data;
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name + " - " + data.sys.country;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    //countryElement.setAttribute("src", apiCountryURL + data.sys.country); ERRO COM API
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");
}


//eventos
btnSearch.addEventListener("click", (event) => {
    event.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
})

cityInput.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        const city = event.target.value;
        showWeatherData(city);
    }
})
