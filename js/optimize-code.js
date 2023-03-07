// import {conditions} from "./icons-classes.js";

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'fc95c8808emsh44f372cf1e795ebp1aaa96jsn2476d4d5c773',
//     'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
//   }
// };

// const userInput = document.querySelector('#search-input');
// const searchBtn = document.querySelector('.search-btn');
// const days = document.querySelectorAll('.day');

// searchBtn.addEventListener('click', () => {
//   getWeather(userInput.value);
// });

// const getWeather = (locationResponse = 'islamabad') => {
//   fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${locationResponse}&format=json&u=c`, options)
//     .then(response => response.json())
//     .then((response) => {
//       currentData(response);
//       upcomingData(response);
//     })
//     .catch(err => alert('You entered the wrong city name'));
// };

// function currentData(response) {
//   const currTemp = document.getElementById('curr-temp');
//   const currLocation = document.getElementById('curr-location');
//   const currDayAndTime = document.getElementById('curr-day&time');
//   const currDate = document.getElementById('curr-date');
//   const currCondition = document.getElementById('curr-condition');
//   const currConditionIcon = document.getElementById('curr-condition-icon');

//   currTemp.textContent = response.current_observation.condition.temperature + "°C";
//   currLocation.textContent = ` ${response.location.city}, ${response.location.country}`;
//   currDayAndTime.textContent = new Date(response.current_observation.pubDate * 1000).toLocaleTimeString('en-US', {
//     timeZone: `${response.location.timezone_id}`,
//     weekday: "long",
//     hour: "numeric",
//     minute: "numeric"
//   });
//   currDate.textContent = new Date(response.current_observation.pubDate * 1000).toLocaleDateString('en-US', {
//     timeZone: `${response.location.timezone_id}`,
//     year: "numeric",
//     month: "long",
//     day: "numeric"
//   });
//   currCondition.textContent = response.current_observation.condition.text;

//   const currCode = response.current_observation.condition.code;
//   currConditionIcon.classList.add(conditions[currCode].slice(3));
// }

// function upcomingData(response) {
//   const forecastData = response.forecasts;
//   days.forEach((dayEl, index) => {
//     const {day, high, low, code} = forecastData[index];
//     dayEl.textContent = day









//////////Again optimization/////////






// import {conditions} from "./icons-classes.js";

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'fc95c8808emsh44f372cf1e795ebp1aaa96jsn2476d4d5c773',
//     'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
//   }
// };

// const userInput = document.querySelector('#search-input');
// const currTemp = document.getElementById('curr-temp');
// const currLocation = document.getElementById('curr-location');
// const currDayTime = document.getElementById('curr-day&time');
// const currDate = document.getElementById('curr-date');
// const currCondition = document.getElementById('curr-condition');
// const currConditionIcon = document.getElementById('curr-condition-icon');
// const days = document.querySelectorAll('.day');
// const searchBtn = document.querySelector('.search-btn');

// const formatDate = (date, timezoneId) => {
//   return new Date(date * 1000).toLocaleString('en-US', {
//     timeZone: timezoneId,
//     hour: 'numeric',
//     minute: 'numeric'
//   });
// };

// const formatFullDate = (date, timezoneId) => {
//   return new Date(date * 1000).toLocaleDateString('en-US', {
//     timeZone: timezoneId,
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });
// };

// const updateCurrentData = (response) => {
//   currTemp.textContent = `${response.current_observation.condition.temperature}°C`; 
//   currLocation.textContent = ` ${response.location.city}, ${response.location.country}`; 
//   currDayTime.textContent = formatDate(response.current_observation.pubDate, response.location.timezone_id);
//   currDate.textContent = formatFullDate(response.current_observation.pubDate, response.location.timezone_id);
//   currCondition.textContent = response.current_observation.condition.text;

//   const currCode = response.current_observation.condition.code;
//   currConditionIcon.classList.add(conditions[currCode].slice(3));
// };

// const updateUpcomingData = (response) => {
//   const forecastData = response.forecasts;
//   days.forEach((dayEl, index) => {
//     const { day, high, low, code } = forecastData[index];
//     dayEl.textContent = day;
//     dayEl.nextElementSibling.nextElementSibling.textContent = ` ${high}°C / ${low}°C`;
//     dayEl.nextElementSibling.classList.add(conditions[code].slice(3));
//   });
// };

// const getWeather = (locationResponse='islamabad') => {
//   fetch(`https://yahoo-weather5.p.rap
   


/////Continuation/////////



// const searchBtn = document.querySelector('.search-btn');

// searchBtn.addEventListener('click', ()=>{
//   getWeather(userInput.value);
// });

// getWeather();








////////Again Continuation/////////






// const getWeather = (locationResponse='islamabad') => {
//     fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${locationResponse}&format=json&u=c`, options)
//       .then(response => response.json())
//       .then(({current_observation, location, forecasts}) => {
//         const currCode = current_observation.condition.code;
//         const conditionsList = conditions[currCode].slice(3);
  
//         const currTemp = document.getElementById('curr-temp');
//         currTemp.textContent = `${current_observation.condition.temperature}°C`; 
  
//         const currLocation = document.getElementById('curr-location');
//         currLocation.textContent = `${location.city}, ${location.country}`; 
  
//         const currDayTime = document.getElementById('curr-day&time');
//         currDayTime.textContent = new Date(current_observation.pubDate*1000).toLocaleTimeString('en-US', {
//           timeZone: location.timezone_id,      
//           weekday: "long",
//           hour: "numeric" , 
//           minute: "numeric"
//         });
  
//         const currDate = document.getElementById('curr-date');
//         currDate.textContent = new Date(current_observation.pubDate*1000).toLocaleDateString('en-US', {
//           timeZone: location.timezone_id,      
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         });
  
//         const currCondition = document.getElementById('curr-condition');
//         currCondition.textContent = current_observation.condition.text;
  
//         const currConditionIcon = document.getElementById('curr-condition-icon');
//         currConditionIcon.classList.add(conditionsList);
  
//         const days = Array.from(document.querySelectorAll('.day'));
//         days.forEach(({nextElementSibling: nextEl}, index) => {
//           const { day, high, low, code } = forecasts[index];
//           const dayEl = nextEl.previousElementSibling;
//           dayEl.textContent = day;
//           nextEl.nextElementSibling.textContent = ` ${high}°C / ${low}°C`;
//           nextEl.classList.add(conditions[code].slice(3));
//         });
//       })
//       .catch(() => alert('You entered Wrong city name'));
//   };
  
//   const searchBtn = document.querySelector('.search-btn');
//   searchBtn.addEventListener('click', () => {
//     getWeather(userInput.value);
//   });
  
//   getWeather();
  