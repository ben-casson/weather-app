export const Weather = (data) => {
    let location = data.name;
    let currentWeather = data.main.temp;
    let currentWeatherStatus = data.weather.main;
    let highTemperature = data.main.temp_max;
    let lowTemperature = data.main.temp_min;
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;
    let precipitation = data.rain + 'mm' ?? '0mm';
    let feelsLikeTemperature = data.main.feels_like;
    let humidity = data.main.humidity + '%';
    let wind = data.wind.speed;
    let pressure = data.main.pressure;
    let visibility = data.main.visibility;
    return { location, currentWeather, currentWeatherStatus, highTemperature,
             lowTemperature, sunrise, sunset, precipitation, feelsLikeTemperature, 
             humidity, wind, pressure, visibility };
}

// export const weather = Weather();