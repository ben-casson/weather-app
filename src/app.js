import { fetchWeatherData } from "./api-functions";

const userInput = document.getElementById('user-input');
const searchButton = document.getElementById('search-button');

export function runApp() {
    //window.onload = () => {
    //     fetchWeatherData('Morgantown');
    // }
    document.addEventListener('keyup', (e) => {
        if (userInput.value.trim() != '' && e.key === 'Enter') {
            fetchWeatherData(userInput.value);
        }
    });
    searchButton.addEventListener('click', () => {
        if (userInput.value.trim() != '') fetchWeatherData(userInput.value);
    });
}