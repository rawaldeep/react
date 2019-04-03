import React, { Component } from 'react';

class TimerInput extends Component {
  render() {
    let running = this.props.checkRunning;
    if(!running){
      return (
    <div style={{marginBottom: 100}}>
    <button onClick={this.props.addTime}>+</button>
    <span>{this.props.minutesProp}</span>
    <button onClick={this.props.subtractTime}>-</button>
    </div>
      );
    }else{
    return (
        <div>
        </div>
    );
  }
  }
}

export default TimerInput;