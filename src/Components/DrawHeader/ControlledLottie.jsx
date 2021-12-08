import React, { Component } from 'react';
import Lottie from 'react-lottie';

import animationData from '../../lotties/sideCloud.json';

//85819-kadokado-heart
class ControlledLottie extends Component {
  state = { isStopped: false, isPaused: false };

  render() {
    const buttonStyle = {
      display: 'inline-block',
      margin: '10px auto',
      marginRight: '10px',
      border: 'none',
      color: 'white',
      backgroundColor: '#647DFF',
      borderRadius: '2px',
      fontSize: '15px',
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      }, 
    };
//app.project.item(index).layers
    

    return (
      <div className="controlled">
        
        <Lottie
          options={defaultOptions}
          height={window.innerHeight}
          width={window.innerWidth}
          resizeMode="cover"
        //  isStopped={this.state.isStopped}
        //  isPaused={this.state.isPaused}
          
        />
        {/* <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: true })}
        >
          Stop
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: false, isPaused: false })}
        >
          Play
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        >
          Pause
        </button>*/}
      </div> 
    );
  }
}

export default ControlledLottie;