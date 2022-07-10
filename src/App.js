import logo from "./logo.svg";
import "./App.css";
import React, { Fragment, useEffect, useState } from "react";

function getDailyWallpaper() {
  return fetch(
    "https://api.nasa.gov/planetary/apod?api_key=gUUfiAPNdWzCHho63B7rUR9T8NFIXj7JAXQOcCIN"
  )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.hdurl);
      document.body.style.backgroundImage = `url(${responseJson.hdurl})`;
      return responseJson.hdurl;
    })
    .catch((error) => {
      console.error(error);
    });
}

function getWeather() {
  if ("geolocation" in navigator) {
    console.log("Available");
  } else {
    console.log("Not Available");
  }
}

function setGreeting() {
  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
  document.getElementById("greetings").innerHTML = "<b>" + greet + "</b>";
}

function App() {
  const [temp, setTemp] = useState("");
  var currentTemperature = "lmao";
  getDailyWallpaper();

  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=01d8f7605567adca2368852455768179`
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

  const [data, setData] = React.useState(null);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }

  // Run `updateQuote` once when component mounts
  React.useEffect(() => {
    updateQuote();
  }, []);

  if (!data) return null;

  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  return (
    <div className="App">
      <div className="Weather">{Math.round(temp - 273.15)}º</div>
      <p id="greetings">{greet}</p>
      <form method={"get"} id="knopkes" action="https://google.com/search?q=">
        <input id="textBox" size="40" name="q" />
        <input id="button" type="submit" value="Search" />
      </form>
      <div className="quoteContainer">
        <div className="quoteContent">{data.content}</div>
        <div className="quoteAuthor">- {data.author}</div>
      </div>
    </div>
  );
}

export default App;
