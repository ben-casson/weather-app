import './styles.scss';

const pageContainer = document.getElementById('root');
const location = document.getElementById('current-location');
const currentTemperature = document.getElementById('current-temperature-number');
const currentWeatherStatus = document.getElementById('current-temperature-status');
const highTemperature = document.getElementById('high-temperature');
const lowTemperature = document.getElementById('low-temperature');

export function updateDisplay(weatherObject) {
    location.innerText = weatherObject.location;
    currentTemperature.innerText = weatherObject.currentTemperature;
    currentWeatherStatus.innerText = weatherObject.currentWeatherStatus;
    highTemperature.innerText = weatherObject.highTemperature;
    lowTemperature.innerText = weatherObject.lowTemperature;

    function setBackgroundImage(weatherObject, weatherStatus) {
        weatherObject.setTimeOfDay();
        weatherObject.timeOfDay == 'daytime' ?
            pageContainer.style.backgroundImage = `url(../src/assets/day-${weatherStatus}.jpg)`
          : pageContainer.style.backgroundImage = `url(../src/assets/night-${weatherStatus}.jpg)`;
    }

    ((weatherObject) => {
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
    })(weatherObject);
}

const userInput = document.getElementById('user-input');
const searchButton = document.getElementById('search-button');