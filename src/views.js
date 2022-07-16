//for DOM functions
import './styles.scss';

//import api function to use in event listener
//export updateDisplay to api-functions
export function updateDisplay(weatherObject) {
    updateMainDisplay(weatherObject);
}

const location = document.getElementById('current-location');
const currentTemperature = document.getElementById('current-temperature-number');
const currentWeatherStatus = document.getElementById('current-temperature-status');
const highTemperature = document.getElementById('high-temperature');
const lowTemperature = document.getElementById('low-temperature');

function updateMainDisplay(weatherObject) {
    currentTemperature.innerText = weatherObject.currentTemperature;

}

// function updateExtraDisplay(weatherObject) {
    
// }

const userInput = document.getElementById('userInput');
const searchButton = document.getElementById('search-button');