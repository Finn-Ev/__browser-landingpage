import React, { useState } from "react";
import "./App.scss";

import Header from "./components/Header";
import Clock from "./components/clock/Clock";
import Footer from "./components/Footer";

const App = props => {
  const [background, setBackground] = useState(
    localStorage.getItem("background")
      ? localStorage.getItem("background")
      : "background2"
  );

  const changeBackground = background => {
    localStorage.setItem("background", background);
    setBackground(localStorage.getItem("background"));
  };

  return (
    <div className={background} id="App">
      <Header />
      <Clock />
      <Footer changeBackground={changeBackground} />
    </div>
  );
};

export default App;
