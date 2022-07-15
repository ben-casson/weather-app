import { API_KEY } from "./api-key.js";

export let WeatherData;

export async function getWeatherData(location) {
    let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=imperial`;
    try {
        const response = await fetch(weatherAPI);
        WeatherData = await response.json();
        console.log(WeatherData);
    }
    catch(error) {console.error(error)}
}
