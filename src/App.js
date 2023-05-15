import React, { useState, useEffect } from 'react';

function Weather() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function getWeather() {
      const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19');
      const data = await response.json();
      setWeather({
        temperature: data.main.temp,
        pressure: data.main.pressure,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        windDegree: data.wind.deg,
        iconUrl: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
      });
    }
    getWeather();
  }, []);

  return (
    <div>
      <h1>Weather in Lviv</h1>
      <div>Temperature: {weather.temperature} &#8451;</div>
      <div>Pressure: {weather.pressure} hPa</div>
      <div>Description: {weather.description}</div>
      <div>Humidity: {weather.humidity}%</div>
      <div>Wind Speed: {weather.windSpeed} m/s</div>
      <div>Wind Degree: {weather.windDegree}&deg;</div>
      <img src={weather.iconUrl} alt={weather.description} />
    </div>
  );
}

export default Weather;
