import React, { Component } from 'react';
class Sound extends Component {
    toggleSound = () =>{
        this.props.sound === "on"?
        this.props.setSound("off"):
        this.props.setSound("on")
    }
  render() {
    return (
      <button onClick={this.UNSAFE_componentWillMount.toggleSound}>SOUND</button>
    );
  }
}

export default Sound;