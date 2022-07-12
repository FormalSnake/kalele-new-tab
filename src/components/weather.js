import React, { useState } from "react";
import apiKeys from "../apikeys.json";

function getWeather() {
  if ("geolocation" in navigator) {
    console.log("Available");
  } else {
    console.log("Not Available");
  }
}

function Weather() {
  const [temp, setTemp] = useState("");
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKeys.weather}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        //document.body.style.backgroundImage = `url(${responseJson.temp})`;
        setTemp(responseJson.main.temp);
        return responseJson.main.temp;
      })
      .catch((error) => {
        console.error(error);
      });
  });
  console.log(temp);
  return <div className="Weather">{Math.round(temp - 273.15)}º</div>;
}

export default Weather;
