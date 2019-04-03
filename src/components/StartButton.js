import React, { Component } from 'react';

class StartButton extends Component {
  render() {;
    let running = this.props.checkRunning;
    let button;
    if(!running){
      button = <button onClick={this.props.onClick}>start</button>;
    }else{
      button = <button onClick={this.props.onReset}>reset</button>;
    }
    return (
        <div className='startbutton'>
        {button}
      </div>
    );
  }
}

export default StartButton;