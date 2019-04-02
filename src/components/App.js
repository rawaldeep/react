import React, { Component } from 'react';
import Timer from './Timer';
import TimerControllers from './TimerControllers';
import Sound from './Sound';
import '../App.css';
class App extends Component {
    constructor(){
        super()
        this.state ={
            Cycle: "Session",
            WorkTime: 25,
            breakTime: 5,
            sound: "on"
        }
        const setSound = (sound) =>{
            this.setState({
                sound: sound
            })

            return 1;
        }
    }
  render() {
    return (
      <div className="App">
      <h1>Pomodoro Clock</h1>
      <Timer/>
      <TimerControllers/>
      <Sound setSound={this.setSound} sound={this.state.sound}/>
      </div>
    );
  }
}

export default App;
