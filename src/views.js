import './styles.scss';

const pageContainer = document.getElementById('root');
const location = document.getElementById('current-location');
const currentTemperature = document.getElementById('current-temperature-number');
const currentWeatherStatus = document.getElementById('current-temperature-status');
const highTemperature = document.getElementById('high-temperature');
const lowTemperature = document.getElementById('low-temperature');

function displayMainData(weatherObject) {
    location.innerText = weatherObject.location;
    currentTemperature.innerText = weatherObject.currentTemperature;
    currentWeatherStatus.innerText = weatherObject.currentWeatherStatus;
    highTemperature.innerText = weatherObject.highTemperature;
    lowTemperature.innerText = weatherObject.lowTemperature;
}


const sunrise = document.getElementById('sunrise-time');
const sunset = document.getElementById('sunset-time');
const precipitation = document.getElementById('precipitation-value');
const feelsLikeTemperature = document.getElementById('feels-like-temperature-value');
const humidity = document.getElementById('humidity-value');
const wind = document.getElementById('wind-value');
const pressure = document.getElementById('pressure-value');
const visibility = document.getElementById('visibility-value');

function displayExtraData(weatherObject) {
    sunrise.innerText = weatherObject.sunrise;
    sunset.innerText = weatherObject.sunset;
    precipitation.innerText = weatherObject.precipitation;
    feelsLikeTemperature.innerText = weatherObject.feelsLikeTemperature;
    humidity.innerText = weatherObject.humidity;
    wind.innerText = weatherObject.wind;
    pressure.innerText = weatherObject.pressure;
    visibility.innerText = weatherObject.visibility;
}


function setBackgroundImage(weatherObject, weatherStatus) {
    weatherObject.setTimeOfDay();
    weatherObject.timeOfDay == 'daytime' ?
        pageContainer.style.backgroundImage = `url(../src/assets/day-${weatherStatus}.jpg)`
      : pageContainer.style.backgroundImage = `url(../src/assets/night-${weatherStatus}.jpg)`;
}


export function updateDisplay(weatherObject) {
    displayMainData(weatherObject);
    displayExtraData(weatherObject);

    let weatherCondition = (weatherObject.currentWeatherStatus).toLowerCase();
    switch (weatherCondition) {
        case 'clouds':
            setBackgroundImage(weatherObject, 'clouds');
            break;
        case 'thunderstorm':
            setBackgroundImage(weatherObject, 'thunderstorm');
            break;
        case 'snow':
            setBackgroundImage(weatherObject, 'snow');
            break;
        case 'clear':
            setBackgroundImage(weatherObject, 'clear');
            break;
        case 'drizzle':
            setBackgroundImage(weatherObject, 'rain');
            break;
        case 'rain':
            setBackgroundImage(weatherObject, 'rain');
            break;
        //several rare conditions with no relevant image
        //many of them are similar to 'mist'
        default:
            setBackgroundImage(weatherObject, 'mist');
            break;    
    }
}


const userInput = document.getElementById('user-input');
const searchButton = document.getElementById('search-button');