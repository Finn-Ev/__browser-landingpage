import React from 'react';
import "./App.scss"

import Header from "./components/Header"
import Clock from "./components/Clock"
import Footer from  "./components/Footer"


class App extends React.Component {
  
  constructor(props) {
    super(props);
    let background = localStorage.getItem("background")? localStorage.getItem("background") : "background2"  
    this.changeBackground = this.changeBackground.bind(this);
    this.state = { 
       selectedBg: background
     }
  }

  changeBackground = (background)=>{
    localStorage.setItem('background', background);
    this.setState({
      selectedBg: localStorage.getItem("background")
    })
  }


  render() { 

    return ( 
      <div className={this.state.selectedBg} id="App">
      <Header />
      <Clock test={this.test} handleSubmit={this.handleSubmit} />
      <Footer changeBackground={this.changeBackground}/>
      
    </div>
     );

  }

}
 
export default App;
