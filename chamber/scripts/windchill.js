
const windSpeedKmH = document.querySelector('#windSpeed').innerText;
const temperature = document.querySelector('#temperature').innerText;
const windChill = document.querySelector('#windChill');

let celsius = Number(temperature);
let wind = Number(windSpeedKmH);

let fahrenheit =  celsius * 1.8 + 32;
let windSpeedMmH = 0.621371 * wind;


if (fahrenheit <= 50 && windSpeedMmH >= 3){
    let windSpeed = 35.74 + 0.6215 * fahrenheit - 35.75 * (windSpeedMmH ** 0.16) + 0.4275 * fahrenheit * (windSpeedMmH ** 0.16);
    windSpeed = windSpeed.toFixed(2);
    windChill.innerHTML = windSpeed;
} else{
    windChill.innerHTML = 'N/A';
}