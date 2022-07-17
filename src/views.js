import './styles.scss';
import { setTimeOfDay } from './utilities';

//import api function to use in event listener
//export updateDisplay to api-functions
export function updateDisplay(weatherObject) {
    updateMainDisplay(weatherObject);
    //updateExtraDisplay(weatherObject)
    changeBackgroundImage(weatherObject);
}

const location = document.getElementById('current-location');
const currentTemperature = document.getElementById('current-temperature-number');
const currentWeatherStatus = document.getElementById('current-temperature-status');
const highTemperature = document.getElementById('high-temperature');
const lowTemperature = document.getElementById('low-temperature');

function updateMainDisplay(weatherObject) {
    location.innerText = weatherObject.location;
    currentTemperature.innerText = weatherObject.currentTemperature;
    currentWeatherStatus.innerText = weatherObject.currentWeatherStatus;
    highTemperature.innerText = weatherObject.highTemperature;
    lowTemperature.innerText = weatherObject.lowTemperature;
}

// function updateExtraDisplay(weatherObject) {
    
// }

const pageContainer = document.getElementById('root');

function setBackgroundImageBasedOnTimeOfDay(weatherObject, weatherStatus) {
    setTimeOfDay(weatherObject);
    if (weatherObject.timeOfDay == 'daytime') {
        pageContainer.style.backgroundImage = `url(../src/assets/day-${weatherStatus}.jpg)`;
    }
    else {
        pageContainer.style.backgroundImage = `url(../src/assets/night-${weatherStatus}.jpg)`;
    }
}

function changeBackgroundImage(weatherObject) {
    let weatherCondition = weatherObject.currentWeatherStatus;
    switch (weatherCondition.toLowerCase()) {
        case 'clouds':
            setBackgroundImageBasedOnTimeOfDay(weatherObject, 'clouds');
            break;
        case 'thunderstorm':
            setBackgroundImageBasedOnTimeOfDay(weatherObject, 'thunderstorm');
            break;
        case 'snow':
            setBackgroundImageBasedOnTimeOfDay(weatherObject, 'snow');
            break;
        case 'clear':
            setBackgroundImageBasedOnTimeOfDay(weatherObject, 'clear');
            break;
        case 'drizzle':
            setBackgroundImageBasedOnTimeOfDay(weatherObject, 'rain');
            break;
        case 'rain':
            setBackgroundImageBasedOnTimeOfDay(weatherObject, 'rain');
            break;
        default:
            setBackgroundImageBasedOnTimeOfDay(weatherObject, 'mist');
            break;    
    }
}

const userInput = document.getElementById('userInput');
const searchButton = document.getElementById('search-button');