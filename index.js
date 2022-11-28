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

    const apiKey = "b40b135798f82a05aed08769f9275f50";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric`;

    function showWeather(response) {
        const typedCity = response.data.name;
        const temp = Math.round(response.data.main.temp);

        const city = document.getElementsByClassName("entered_city")[0];
        city.innerHTML = typedCity;
        cityInput.value = "";

        const currentTemperature = document.getElementsByClassName(
            "current_temperature"
        )[0];
        currentTemperature.innerText = temp;
    }

    axios.get(`${url}&appid=${apiKey}`).then(showWeather);
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