export const Weather = (data) => {

    let timeOfDay = '';
    const setTimeOfDay = function() {
        const secondsSinceEpoch = parseInt(Math.round(Date.now() / 1000));
        (secondsSinceEpoch > this.sunrise && secondsSinceEpoch < this.sunset)
            ? this.timeOfDay = 'daytime'
            : this.timeOfDay = 'nighttime';
    };
    
    let location = data.name;
    let currentTemperature = Math.round(data.main.temp);
    let currentWeatherStatus = data.weather[0].main;
    let highTemperature = Math.round(data.main.temp_max);
    let lowTemperature = Math.round(data.main.temp_min);
    let sunrise = parseInt(data.sys.sunrise);
    let sunset = parseInt(data.sys.sunset);
    let precipitation = data.rain + 'mm' ?? '0mm';
    let feelsLikeTemperature = Math.round(data.main.feels_like);
    let humidity = Math.round(data.main.humidity) + '%';
    let wind = Math.round(data.wind.speed);
    let pressure = data.main.pressure;
    let visibility = data.main.visibility;

    return { timeOfDay, setTimeOfDay, location, currentTemperature, currentWeatherStatus, 
             highTemperature, lowTemperature, sunrise, sunset, precipitation, 
             feelsLikeTemperature, humidity, wind, pressure, visibility };
}