import React, { Component } from "react";
import Btn from "./Button/myButton.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      messageRes:""
    };
  }

  increment = () => {

    if (this.state.number >= 0) {
      this.setState({
        number: this.state.number + 1,
        messageRes: ""
      });
    }else if(this.state.number == 0) {
      // <div>{this.state.messageRes}</div>
      this.setState({
        number: this.state.number,
        messageRes: "Batas Pengurangan Angka"
      });
   }
    
  };

  decrement = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1,
        messageRes: ""
      });
    }else if(this.state.number == 0) {
      // <div>{this.state.messageRes}</div>
      this.setState({
        number: this.state.number,
        messageRes: "Batas Pengurangan Angka"
      });
   }
  };
  render() {
    return (
      <div className="App">
        <div style={{ margin:"0 auto",width: "50px", height: "50px" }}>{this.state.number}</div>
        <Btn crB={"btn-info"} updateNum={this.increment} sign="+" />
        <Btn  crB={"btn-info"} updateNum={this.decrement} sign="-" />
        <div>{this.state.messageRes}</div>
        {/* {
          this.state.number < 0 ? <div>{this.state.messageRes}</div> : null
        } */}
      </div>
    );
  }
}

export default App;
