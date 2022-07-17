export function isDaytime(weatherObject) {
    const secondsSinceEpoch = Math.round(Date.now() / 1000);
    if (secondsSinceEpoch > weatherObject.sunrise && 
        secondsSinceEpoch < weatherObject.sunrise) {
        return true;
    }
    else {
        return false;
    }
}