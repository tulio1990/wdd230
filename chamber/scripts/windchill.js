const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeedKMxH = document.querySelector('#windSpeed');
const windChill = document.querySelector('#windChill');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Comayaguela&units=metric&appid=e8232ddb1e0ca130ad9aad3650314655';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const temperature = weatherData.main.temp.toFixed(0)
    const windSpeed = (parseFloat(weatherData.wind.speed)*3600)/1000
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();
    windSpeedKMxH.textContent = windSpeed

    let celsius = Number(temperature);
    let wind = Number(windSpeed);
    //console.log(wind)
    let fahrenheit =  celsius * 1.8 + 32;
    let windSpeedMmH = 0.621371 * wind;
    //console.log(fahrenheit)
    //console.log(windSpeedMmH)

    if (fahrenheit <= 50 && windSpeedMmH >= 3){
        let windSpeed = 35.74 + 0.6215 * fahrenheit - 35.75 * (windSpeedMmH ** 0.16) + 0.4275 * fahrenheit * (windSpeedMmH ** 0.16);
        windSpeed = windSpeed.toFixed(2);
        windChill.innerHTML = windSpeed;
    } else{
        windChill.innerHTML = 'N/A';
    }
  }