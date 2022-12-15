const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive') };


const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5334223&appid=e8232ddb1e0ca130ad9aad3650314655";

fetch(forecastApiURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        // console.table(jsonObject); // temporary checking for valid response and data parsing
        const forescastList = jsonObject["list"].filter((forecast) => {
            if (forecast.dt_txt.includes(" 06:00:00")) {
                return forecast;
            }
        });

        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        for (let i = 0; i < forescastList.length; i++) {
            // Create elements
            let container = document.createElement("div");

            let dayOfTheWeek = document.createElement("span");
            const eachDay = new Date(forescastList[i].dt_txt);

            let image = document.createElement("img");
            let imagesrc = "https://openweathermap.org/img/w/" + forescastList[i].weather[0].icon + ".png";
            let desc = forescastList[i].weather[0].description;

            let span = document.createElement("span");
            let spanTemperature = parseFloat(forescastList[i].main.temp);
            let roundTemp = Math.round(spanTemperature);
            // Set atributes
            container.setAttribute("class", "flex-col");

            dayOfTheWeek.setAttribute("class", "col-head");

            image.setAttribute("class", "image-day");
            image.setAttribute("src", imagesrc);
            image.setAttribute("alt", desc);
            span.setAttribute("class", "data");

            //Append elementes
            dayOfTheWeek.textContent = weekday[eachDay.getDay()];
            container.appendChild(dayOfTheWeek)
            container.appendChild(image);
            span.textContent = roundTemp + "°F";
            container.appendChild(span);

            // Add elements to container 
            document.querySelector("div.flex").appendChild(container);
        }
    });