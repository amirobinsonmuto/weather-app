import { fetchWeather } from "./api";

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  fetchWeather(document.getElementById("city").value);
  e.preventDefault();
});
