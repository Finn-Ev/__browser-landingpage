import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Clock from "./components/clock/Clock";
import Footer from "./components/Footer";
import Dropdown from "./components/FooterComponents/DropdownComp";

const App = () => {
  const [background, setBackground] = useState();

  useEffect(() => {
    if (localStorage.getItem("background")) {
      setBackground(localStorage.getItem("background"));
    }
  }, [background]);

  const changeBackground = (background, maintainBackground) => {
    if (maintainBackground) {
      localStorage.setItem("background", background);
      setBackground(localStorage.getItem("background"));
    } else if (!maintainBackground) {
      setBackground(background);
    }
  };

  return (
    <>
      <div className={`${background}`}>
        <div id="App">
          <Header />
          <Clock changeBackground={changeBackground} />
          <Footer changeBackground={changeBackground} />
        </div>
      </div>
      <Dropdown changeBackground={changeBackground} />
      <div className="mobile-disclaimer">
        <p>Diese Website ist nicht für mobile Endgeräte verfügbar</p>
      </div>
    </>
  );
};

export default App;
