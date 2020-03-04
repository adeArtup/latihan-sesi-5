import React, { Component } from "react";

class MyButton extends React.Component {
  render() {
      
    return (
        <button className="btn btn-lg btn-info" onClick={this.props.updateNum}>{this.props.sign}</button>
    );
  }
}

export default MyButton;
