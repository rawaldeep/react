import React, { Component } from 'react';

class PauseButton extends Component {
  render() {;
    let running = this.props.checkRunning;
    let button;
    if(running){
      button = <button onClick={this.props.onPause}>pause</button>;
    }
    // else{
    //   button = <button onClick={this.props.onReset}>reset</button>;
    // }
    return (
        <div className='pausebutton' >
        {button}
      </div>
    );
  }
}

export default PauseButton;