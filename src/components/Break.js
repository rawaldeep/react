import React, { Component } from 'react';

class Break extends Component {
  render() {
    let running = this.props.checkRunning;
    if(!running){
      return (
    <div className='breakbutton'>
    <h3>Break Time</h3>
    <button onClick={this.props.addTimeBreak}>+</button>
    <span>{this.props.BreakProp}</span>
    <button onClick={this.props.subtractTimeBreak}>-</button>
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

export default Break;