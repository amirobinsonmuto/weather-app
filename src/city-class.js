export default class City {
  constructor(obj) {
    this.name = obj.name;
    this.mainWeather = obj.weather[0].description;
    this.tempC = Math.round((obj.main.temp - 273.15) * 100) / 100;
    this.windSpeed = obj.wind.speed;
  }
}
