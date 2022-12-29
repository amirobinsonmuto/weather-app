const card = document.getElementById("card");

export function displayCard(obj) {
  while (card.firstChild) {
    card.removeChild(card.firstChild);
  }
  card.classList.add("card-style");
  let cityPara = document.createElement("p");
  cityPara.classList.add("city-name");
  cityPara.textContent = obj.name;
  let mainWeatherPara = document.createElement("p");
  mainWeatherPara.textContent = "Weather: " + obj.mainWeather;
  let mainTempPara = document.createElement("p");
  mainTempPara.textContent = "Temperature: " + obj.tempC + " °C";
  let windSpeedPara = document.createElement("p");
  windSpeedPara.textContent = "Wind speed: " + obj.windSpeed + " km/h";
  card.append(cityPara, mainWeatherPara, mainTempPara, windSpeedPara);
}
