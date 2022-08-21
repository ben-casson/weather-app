import { API_KEY } from "./api-key.js";
import { Weather } from "./weather-model";
import { updateDisplay } from "./views.js";
import { fahrenheitButton } from "./views.js";

export async function fetchWeatherData(location) {
    let currentUnit = fahrenheitButton.classList.contains('selected') ? 'imperial' : 'metric';
    
    let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=${currentUnit}`;
    
    try {
        const response = await fetch(weatherAPI);
        const data = await response.json();
        console.log(data);
        const weather = Weather(data);
        updateDisplay(weather);
    }
    catch(error) {console.error(error)}
}