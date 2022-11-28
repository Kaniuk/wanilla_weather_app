let now = new Date();

const days = [
    "Monday",
    "Monday",
    "Tusday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Suturday",
    "Sunday"
];
const weekDay = days[now.getDay()];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const month = months[now.getMonth()];
const monthDay = now.getDate();

let date = document.getElementsByClassName("week_day")[0];
date.innerHTML = `${weekDay}`;

let monthDayNow = document.getElementsByClassName("month")[0];
monthDayNow.innerHTML = `${month}`;

const day = document.getElementsByClassName("month_date")[0];
day.innerHTML = `${monthDay}`;


function displayCity(e) {
    e.preventDefault();
    const cityInput = document.getElementsByClassName("city_input")[0];
    const currentCity = cityInput.value;

    const apiKey = "d1f3fa1bbd2e0t6f3b4o3faabd9a8d79";
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${currentCity}&units=metric`;

    function showWeather(response) {
        console.log(response.data);
        const typedCity = response.data.city;
        const temp = Math.round(response.data.daily[0].temperature.day);
        const icon = response.data.daily[0].condition.icon_url;
        const weatherDescription = response.data.daily[0].condition.description;

        const city = document.getElementsByClassName("entered_city")[0];
        city.innerHTML = typedCity;
        cityInput.value = "";

        const weatherIcon = document.getElementsByClassName('img')[0];
        weatherIcon.setAttribute(
            "src",
            icon
        );
        weatherIcon.setAttribute("alt", weatherDescription);

        const currentTemperature = document.getElementsByClassName(
            "current_temperature"
        )[0];

        currentTemperature.innerText = temp;



    }



    axios.get(`${url}&&key=${apiKey}`).then(showWeather);
}

const inputForm = document.getElementsByClassName("city_button")[0];
inputForm.addEventListener("click", displayCity);

const cityInput = document.getElementsByClassName("city_input")[0];
cityInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        inputForm.click();
    }
});