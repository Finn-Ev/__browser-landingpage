import React, { useState, useEffect } from "react";
import "./App.scss";

import Header from "./components/Header";
import Clock from "./components/clock/Clock";
import Footer from "./components/Footer";

const App = () => {
  const [background, setBackground] = useState();

  useEffect(() => {
  
     if(localStorage.getItem("background") && localStorage.getItem("maintainBackground")){
      setBackground(localStorage.getItem("background"))
     } 
 
  }, [background])

  const changeBackground = (background, maintainBackground) => {
    if(maintainBackground === true){
      localStorage.setItem("maintainBackground", true)
      localStorage.setItem("background", background)

      setBackground(localStorage.getItem("background"));
    }
    else if(maintainBackground == null && !localStorage.getItem("maintainBackground") ) {
      setBackground(background);
    } 
  };

  return (
    <div className={`${background}`}>
      <div id="App">
        <Header />
        <Clock changeBackground={changeBackground} />
        <Footer changeBackground={changeBackground} />
      </div>
    </div>

  );
};

export default App;
