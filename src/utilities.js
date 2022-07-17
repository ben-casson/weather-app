export function setTimeOfDay(weatherObject) {
    const secondsSinceEpoch = parseInt(Math.round(Date.now() / 1000));
    if (secondsSinceEpoch > weatherObject.sunrise && secondsSinceEpoch < weatherObject.sunset) {
        weatherObject.timeOfDay = 'daytime';
    }
    else {
        weatherObject.timeOfDay = 'nighttime';
    }
}