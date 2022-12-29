import City from "./city-class";
import { displayCard } from "./ui";

export async function fetchWeather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=91bc32fed2e97847d9ec6eb7c87da3a5`,
      { mode: "cors" }
    );
    const data = await response.json();
    console.log(data);
    let city = new City(data);
    displayCard(city);
  } catch (err) {
    console.error(err);
  }
}
