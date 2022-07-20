import { convertEpochToNormalTime } from "./utilities";

export const Weather = (data) => {

    let timeOfDay = '';
    const setTimeOfDay = function() {
        const secondsSinceEpoch = parseInt(Math.round(Date.now() / 1000));
        (secondsSinceEpoch > this.sunriseEpoch && secondsSinceEpoch < this.sunsetEpoch)
            ? this.timeOfDay = 'daytime'
            : this.timeOfDay = 'nighttime';
    };
    
    let location = data.name;
    let currentTemperature = Math.round(data.main.temp);
    let currentWeatherStatus = data.weather[0].main;
    let highTemperature = Math.round(data.main.temp_max);
    let lowTemperature = Math.round(data.main.temp_min);
    let sunriseEpoch = parseInt(data.sys.sunrise);
    let sunsetEpoch = parseInt(data.sys.sunset);
    let sunrise = convertEpochToNormalTime(parseInt(data.sys.sunrise));
    let sunset = convertEpochToNormalTime(parseInt(data.sys.sunset) - 43200);
    let precipitation = data.rain != undefined ? data.rain['1h'] : '0';
    let feelsLikeTemperature = Math.round(data.main.feels_like);
    let humidity = Math.round(data.main.humidity) + '%';
    let wind = Math.round(data.wind.speed);
    let pressure = data.main.pressure;
    let visibility = data.visibility;

    return { timeOfDay, setTimeOfDay, location, currentTemperature, currentWeatherStatus, 
             highTemperature, lowTemperature, sunriseEpoch, sunsetEpoch, sunrise, sunset, 
             precipitation, feelsLikeTemperature, humidity, wind, pressure, visibility };
}