import React, { Component } from 'react';
import Timer from './components/Timer';
import TimerInput from './components/TimerInput';
import Break from './components/Break';
import StartButton from './components/StartButton';
import PauseButton from './components/PauseButton';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: '00',
      minutes: '25',
      break: '5',
      isRunning: false,
      nextTimer: null
    }
    // this.secondsRemaining;
    // this.intervalHandle;
    
  }

  pause = () => {
    this.setState((prevState)=>({
      seconds: prevState.seconds,
      minutes: prevState.minutes,
      isRunning: false
    }))
    clearInterval(this.intervalHandle)
  }
  addMoreTimeBreak = () => {
    this.setState((prevState)=>({
      break: ++prevState.break
    })) 
  }
  subMoreTimeBreak = () => {
    if(this.state.break > 1){
    this.setState((prevState)=>({
      break: --prevState.break
    })) 
  }
  }
  addMoreTime = () => {
    this.setState((prevState)=>({
      minutes: ++prevState.minutes
    })) 
  }
  subMoreTime = () => {
    if(this.state.minutes > 1){
    this.setState((prevState)=>({
      minutes: --prevState.minutes
    })) 
  }
  }
  tick = () => {
    let min = Math.floor(this.secondsRemaining/60);
    let sec = this.secondsRemaining - (min * 60);
    this.setState({
      minutes: min,
      seconds: sec
    })
    if(sec < 10){
      this.setState({
        seconds: "0" + this.state.seconds
      })
    }
    if(min < 10){
      this.setState({
        minutes: "0" + min
      })
    }
    if(min <= 0 & sec <= 0){
      this.sessions();
     clearInterval(this.intervalHandle);
    }
    if(this.state.isRunning){
    this.secondsRemaining--
  }
  }
  startCountDown = () => {
    let secondExtra = this.state.seconds;
    this.setState({
      isRunning: true,
      nextTimer: this.state.minutes
    });
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    
    this.secondsRemaining = (time * 60)+ parseInt(secondExtra) ;

  }
  stopCountDown = () => {
    this.setState({
      isRunning: false,
      minutes: '25',
      seconds: '00'
    });

    this.secondsRemaining = 1500;
    clearInterval(this.intervalHandle);
    clearInterval(this.breakSession);
  }
  sessions = () => {
    if(this.state.isRunning){
    let breaktime = parseInt(this.state.break) * 60 * 1000 ;
    this.breakSession = setInterval(()=>{this.setState({
      minutes: this.state.nextTimer,
      seconds: 0
    });
    this.startCountDown();
  }, breaktime);
    }
  }
  

  render() {
    return (
      <div className="App">
        <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
        <TimerInput checkRunning={this.state.isRunning} minutesProp={this.state.minutes} subtractTime={()=>this.subMoreTime()} addTime={() => this.addMoreTime()}/>
        <Break checkRunning={this.state.isRunning} BreakProp={this.state.break} subtractTimeBreak={()=>this.subMoreTimeBreak()} addTimeBreak={() => this.addMoreTimeBreak()}/>
        <PauseButton checkRunning={this.state.isRunning} onPause={()=> this.pause()}/>
       <StartButton checkRunning={this.state.isRunning} onClick={()=> this.startCountDown()} onReset={()=> this.stopCountDown()}/>
      </div>
    );
  }
}

export default App;