async function getWeather() {
  const city = document.getElementById("city").value;

  if (!city) return alert("Enter a city name");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f8823f2afe9831924e8bfb2578b9c45&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod !== 200) {
    document.getElementById("location").innerText = "City not found";
    document.getElementById("temp").innerText = "";
    document.getElementById("desc").innerText = "";
    return;
  }

  document.getElementById("location").innerText =
    `${data.name}, ${data.sys.country}`;

  document.getElementById("temp").innerText =
    `${Math.round(data.main.temp)}°C`;

  document.getElementById("desc").innerText =
    data.weather[0].description;

    document.getElementById("humidity").innerText =
  `Humidity: ${data.main.humidity}%`;

document.getElementById("feels").innerText =
  `Feels like: ${Math.round(data.main.feels_like)}°C`;

}
