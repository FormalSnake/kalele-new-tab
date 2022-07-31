import "./App.css";
import React from "react";
import Greeting from "./components/greeting";
import Weather from "./components/weather";
import Wallpaper from "./components/wallpaper";
import Quote from "./components/quote";
import SearchBox from "./components/searchBar";

function App() {
  Wallpaper();
  Quote();

  return (
    <div className="App">
      <Weather />
      <Greeting />
      <SearchBox />
      <Quote />
    </div>
  );
}

export default App;
