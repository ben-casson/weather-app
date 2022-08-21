import './styles.scss';
import { fetchWeatherData } from './api-functions';
import { userInput } from './app';

export const fahrenheitButton = document.getElementById('fahrenheit-button');
export const celsiusButton = document.getElementById('celsius-button');

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
    sunrise.innerText = weatherObject.sunrise + ' AM';
    sunset.innerText = weatherObject.sunset + ' PM';
    precipitation.innerText = fahrenheitButton.classList.contains('selected') ? weatherObject.precipitation + ' in ' : weatherObject.precipitation + ' mm';
    feelsLikeTemperature.innerText = weatherObject.feelsLikeTemperature;
    humidity.innerText = weatherObject.humidity;
    wind.innerText = fahrenheitButton.classList.contains('selected') ? weatherObject.wind + ' mi/h' : weatherObject.wind + ' km/h'
    pressure.innerText = weatherObject.pressure + ' hPa';
    visibility.innerText = weatherObject.visibility;
}

export function updateDisplay(weatherObject) {
    displayMainData(weatherObject);
    displayExtraData(weatherObject);
}

function changeUnits(button) {
    button.addEventListener('click', () => {
        if (!button.classList.contains('selected')) {
            fahrenheitButton.classList.remove('selected');
            celsiusButton.classList.remove('selected');
            button.classList.add('selected');
            if (userInput.value.trim() != '') fetchWeatherData(userInput.value);
        }
    });
}

changeUnits(fahrenheitButton);
changeUnits(celsiusButton);