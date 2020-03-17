import React, { useState } from "react";
import "./App.scss";

import Header from "./components/Header";
import Clock from "./components/clock/Clock";
import Footer from "./components/Footer";

const App = () => {
  const [background, setBackground] = useState(
    localStorage.getItem("background")
      ? localStorage.getItem("background")
      : "background1" // set an initial background
  );

  const changeBackground = background => {
    localStorage.setItem("background", background);
    setBackground(localStorage.getItem("background"));
  };

  return (
    <div className={`${background}`}>
      <div id="App">
        <Header />
        <Clock />
        <Footer changeBackground={changeBackground} />
      </div>
    </div>

  );
};

export default App;
