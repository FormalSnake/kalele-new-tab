import "./App.css";
import React from "react";
import Greeting from "./components/greeting";
import Weather from "./components/weather";
import Wallpaper from "./components/wallpaper";
import Quote from "./components/quote";
import SearchBox from "./components/searchBar";
import Settings from "./components/settings";

function App() {
  Wallpaper();
  Quote();

  return (
    <div className="App">
      <Weather />
      <Greeting />
      <SearchBox />
      <Quote />
      <Settings />
    </div>
  );
}

export default App;
