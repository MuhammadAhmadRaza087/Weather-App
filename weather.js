const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '', //Add your own rapid API key
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
function fetch_weather(city) {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            city_name.innerHTML = city
            city_temp.innerHTML = response.temp
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
var city = JSON.parse(localStorage.getItem('city_Name'));
const elements = document.querySelectorAll(".city-name");

// Loop through the NodeList and change the inner text
elements.forEach(function (element) {
    element.innerText = city;
});
fetch_weather(city)