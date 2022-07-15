import { API_KEY } from "./api-key.js";

export async function getWeatherData(location) {
    let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`;
    try {
        const response = await fetch(weatherAPI);
        const weatherData = await response.json();
        console.log(weatherData);
    }
    catch(error) {console.error(error)}
}

//https://api.openweathermap.org/data/2.5/weather?q=London&APPID=1111111111