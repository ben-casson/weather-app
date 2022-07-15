import { API_KEY } from "./api-key.js";
import { Weather } from "./weather-model";

export async function fetchWeatherData(location) {
    let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=imperial`;
    try {
        const response = await fetch(weatherAPI);
        const data = await response.json();
        console.log(data);
        const weather = Weather(data);
    }
    catch(error) {console.error(error)}
}