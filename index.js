const API_KEY = "757e135425abb2fe6ae0382199a50a02"



function handleFormSubmit(event) {
  event.preventDefault();
 let city = document.getElementById("city").value
 getWeatherFromApi(city)
}

function getWeatherFromApi(city){
fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + API_KEY + "&units=imperial")
  .then(response => response.json())
  .then(displayWeather)
}

function displayWeather(json) {
  debugger;
  document.getElementById('temp').innerHTML =json.main.temp;
  document.getElementById('low').innerHTML =json.main.low;
  document.getElementById('high').innerHTML =json.main.high;
  
  // get the temp like this: json.temp.main
  // select the HTML element with an ID of "temp" and set its .innerHTML = json.temp.main
}



// function fetchCurrentWeather(city) {
//   debugger;
  
//   //fetch current weather based on city
// }

// function displayWeather(weatherJson) {
//   let temp = weatherJson.main.temp
//   let tempRow = document.getElementById("temp")
//   tempRow.innerHTML = temp
//   //render current weather data to the DOM using provided IDs and json from API
// }


// f
  
  
//   //fetch five day forecast data based on city
// }

// function displayFiveDayForecast(json) {
//   //render five day forecast data to the DOM using provided IDs and json from API
// }

// function createChart(json) {
//   //Bonus: render temperature chart using five day forecast data and ChartJS
// }

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
 let cityForm= document.getElementById("cityForm");
 cityForm.addEventListener("submit", handleFormSubmit)
})


