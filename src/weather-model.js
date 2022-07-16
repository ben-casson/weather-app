export const Weather = (data) => {
    let location = data.name;
    let currentTemperature = Math.round(data.main.temp);
    let currentWeatherStatus = data.weather.main;
    let highTemperature = Math.round(data.main.temp_max);
    let lowTemperature = Math.round(data.main.temp_min);
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;
    let precipitation = data.rain + 'mm' ?? '0mm';
    let feelsLikeTemperature = Math.round(data.main.feels_like);
    let humidity = Math.round(data.main.humidity) + '%';
    let wind = Math.round(data.wind.speed);
    let pressure = data.main.pressure;
    let visibility = data.main.visibility;
    return { location, currentTemperature, currentWeatherStatus, highTemperature,
             lowTemperature, sunrise, sunset, precipitation, feelsLikeTemperature, 
             humidity, wind, pressure, visibility };
}

// export const weather = Weather();