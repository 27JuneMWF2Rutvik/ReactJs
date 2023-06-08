import React, { Component } from 'react'
import TemperatureInput from './InputField.jsx';

class Mainfile extends Component {
    handleCelsiusChange = (data)=>{
        console.log("Mainfile handleCelsiusChange Parent",data);
    }
  render() {
    return (
      <div>
        Parent Data
        <TemperatureInput parentMethod={this.handleCelsiusChange}/>
      </div>
    );
  }
}

export default Mainfile
