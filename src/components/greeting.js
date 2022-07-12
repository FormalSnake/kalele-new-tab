import React, { useState, useEffect } from "react";

function Greeting() {
  var greet;
  var myDate = new Date();
  var hrs = myDate.getHours();
  /*
  //Clock time variables
  let timehrs = new Date().getHours().toLocaleString();
  let timemin = new Date().getMinutes().toLocaleString();
  let timesec = new Date().getSeconds().toLocaleString();
  //Hours
  const [cHrs, setHrs] = useState(timehrs);
  useEffect(() => {
    setInterval(() => {
      setHrs(timehrs);
    }, 1000);
  });
  //Minutes
  const [cMin, setMin] = useState(timemin);
  useEffect(() => {
    setInterval(() => {
      setMin(timemin);
    }, 1000);
  });
  //Seconds
  const [cSec, setSec] = useState(timesec);
  useEffect(() => {
    setInterval(() => {
      setSec(timesec);
    }, 1000);
  });*/
  //greeting message
  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
  return (
    <div id="greetingContainer">
      <p id="greetings">{greet}</p>
    </div>
  );
  //<p id="greetings">
  //      {cHrs}:{cMin}:{cSec}
  //    </p>
}

export default Greeting;
