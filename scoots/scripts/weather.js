const currentTemp = document.querySelector('#current-temp');
const weatherContainer = document.querySelector('#weather-container');
const humidity = document.querySelector('#humidity');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.44&lon=-86.90&units=imperial&appid=1961a74e36813368e84efb25d512b68d';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.44&lon=-86.90&units=imperial&appid=1961a74e36813368e84efb25d512b68d';

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function displayWeather() {
    const currentWeatherData = await apiFetch(url);
    const forecastData = await apiFetch(forecastUrl);
    
    displayCurrentWeather(currentWeatherData);
    displayForecast(forecastData);
}

function displayCurrentWeather(data) {
    const round = Math.round(data.main.temp);
    currentTemp.innerHTML = `${round}&deg;F`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', '150px');
    weatherIcon.setAttribute('height', '150px');
    weatherContainer.appendChild(weatherIcon);
    captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
    // Find the forecast for 15:00 tomorrow
    const tomorrowForecast = data.list.find(item => {
        const forecastDate = new Date(item.dt_txt);
        return forecastDate.getHours() === 15;
    });

    if (tomorrowForecast) {
        const forecastTemp = Math.round(tomorrowForecast.main.temp);
        const forecastDesc = tomorrowForecast.weather[0].description;
        const forecastIcon = `https://openweathermap.org/img/w/${tomorrowForecast.weather[0].icon}.png`;

        // Display forecasted temperature and icon
        const forecastContainer = document.createElement('div');
        forecastContainer.classList.add('forecast');
        forecastContainer.innerHTML = `
            <h3>Tomorrow's Forecast</h3>
            <p>${forecastTemp}&deg;F</p>
            <img src="${forecastIcon}" alt="${forecastDesc}" width="100" height="100">
        `;
        weatherContainer.appendChild(forecastContainer);
    }
}

function displayResults(data) {
    const round = Math.round(data.main.temp);
    currentTemp.innerHTML = `${round}&deg;F`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', '150px');
    weatherIcon.setAttribute('height', '150px');
    weatherContainer.appendChild(weatherIcon);
    captionDesc.textContent = `${desc}`;

    // Display high temperature in the message
    const highTemp = Math.round(data.main.temp_max);
    document.getElementById('high-temp').textContent = highTemp;

    // Show the message
    const message = document.querySelector('.message');
    message.classList.add('show');
}

displayWeather();
