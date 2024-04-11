const currentTemp = document.querySelector('#current-temp');
const weatherContainer = document.querySelector('#weather-container');
const humidity = document.querySelector('#humidity');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.44&lon=-86.90&units=imperial&appid=1961a74e36813368e84efb25d512b68d';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

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
}