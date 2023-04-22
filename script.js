const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '', //Add your Rapid API key here...
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad', options)
    .then(response => response.json())
    .then(response => {
        isl_cloud_pct.innerHTML = response.cloud_pct
        isl_temp.innerHTML = response.temp
        isl_feels_like.innerHTML = response.feels_like
        isl_humidity.innerHTML = response.humidity
        isl_min_temp.innerHTML = response.min_temp
        isl_max_temp.innerHTML = response.max_temp
        isl_wind_speed.innerHTML = response.wind_speed
        isl_wind_degrees.innerHTML = response.wind_degrees
        isl_sunrise.innerHTML = response.sunrise
        isl_sunset.innerHTML = response.sunset
        is_temp.innerText = response.temp
    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Columbia', options)
    .then(response => response.json())
    .then(response => {
        colm_cloud_pct.innerHTML = response.cloud_pct
        colm_temp.innerHTML = response.temp
        colm_feels_like.innerHTML = response.feels_like
        colm_humidity.innerHTML = response.humidity
        colm_min_temp.innerHTML = response.min_temp
        colm_max_temp.innerHTML = response.max_temp
        colm_wind_speed.innerHTML = response.wind_speed
        colm_wind_degrees.innerHTML = response.wind_degrees
        colm_sunrise.innerHTML = response.sunrise
        colm_sunset.innerHTML = response.sunset
        col_temp.innerText = response.temp
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
    .then(response => response.json())
    .then(response => {
        dub_cloud_pct.innerHTML = response.cloud_pct
        dub_temp.innerHTML = response.temp
        dub_feels_like.innerHTML = response.feels_like
        dub_humidity.innerHTML = response.humidity
        dub_min_temp.innerHTML = response.min_temp
        dub_max_temp.innerHTML = response.max_temp
        dub_wind_speed.innerHTML = response.wind_speed
        dub_wind_degrees.innerHTML = response.wind_degrees
        dub_sunrise.innerHTML = response.sunrise
        dub_sunset.innerHTML = response.sunset
        du_temp.innerText = response.temp
    })
    .catch(err => console.error(err));
search_btn.addEventListener("click", (e) => {
    e.preventDefault();
    var city = input_city.value
    window.open("weather.html", "_self")
    localStorage.setItem('city_Name', JSON.stringify(city));
})

