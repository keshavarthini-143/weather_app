getWeatherData = (city) => {
    return fetch(`/weather?city=${city}`)
        .then((response) => response.json());
};

function searchCity() {
    const city = document.getElementById('city-input').value.trim();
    getWeatherData(city)
        .then((data) => showWeatherData(data))
        .catch((err) => console.log(err));
}

showWeatherData = (weatherData) => {
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('weather-type').innerText = weatherData.weather[0].main;
    document.getElementById('temp').innerText = weatherData.main.temp;
    document.getElementById('feels_like').innerText = weatherData.main.feels_like;
    document.getElementById('humidity').innerText = weatherData.main.humidity;
};
