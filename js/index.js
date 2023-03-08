import { conditions } from "./icons-classes.js";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": config.API_KEY,
    "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
  },
};

const userInput = document.querySelector("#search-input");

const getWeather = (locationResponse = "islamabad") => {
  if (!locationResponse) {
    alert("Please enter a city name.");
    return;
  }

  fetch(
    `https://yahoo-weather5.p.rapidapi.com/weather?location=${locationResponse}&format=json&u=c`,
    options
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found!");
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      currentData(response);
      upcomingData(response);
    })
    .catch((error) => {
      alert(error.message);
    });
};

function currentData(response) {
  document.getElementById("curr-temp").innerHTML =
    response.current_observation.condition.temperature + "°C";
  document.getElementById(
    "curr-location"
  ).innerHTML = ` ${response.location.city}, ${response.location.country}`;
  document.getElementById("curr-day&time").innerHTML = new Date(
    response.current_observation.pubDate * 1000
  ).toLocaleTimeString("en-US", {
    timeZone: `${response.location.timezone_id}`,
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  });
  document.getElementById("curr-date").innerHTML = new Date(
    response.current_observation.pubDate * 1000
  ).toLocaleDateString("en-US", {
    timeZone: `${response.location.timezone_id}`,
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("curr-condition").innerHTML =
    response.current_observation.condition.text;

  const currCode = response.current_observation.condition.code;
  const currIcon = conditions[currCode];
  if (currIcon) {
    document.getElementById("curr-condition-icon").classList = "";
    document.getElementById(
      "curr-condition-icon"
    ).className = `fs-900 wi ${currIcon.slice(3)}`;
  }
}

const days = document.querySelectorAll(".day");

function upcomingData(response) {
  const forecastData = response.forecasts;
  days.forEach((dayEl, index) => {
    const { day, high, low, code } = forecastData[index];
    dayEl.textContent = day;
    dayEl.nextElementSibling.nextElementSibling.textContent = ` ${high}°C / ${low}°C`;
    const iconClass = conditions[code];
    if (iconClass) {
      dayEl.nextElementSibling.className = ` wi ${iconClass.slice(3)}`;
    }
  });
}

const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = userInput.value.trim();
  getWeather(location);
});

getWeather();
