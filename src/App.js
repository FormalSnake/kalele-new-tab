import "./App.css";
import React from "react";
import Greeting from "./components/greeting";
import Weather from "./components/weather";
import Nasa from "./components/nasa";
import Quote from "./components/quote";
import SearchBox from "./components/searchBar";

function App() {
  Nasa();
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
