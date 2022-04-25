import './style.scss';

import React, { Component } from 'react';

import ControlledLottie from '../DrawHeader/ControlledLottie';
import Header from '../Header/Header';

class Home extends Component {
  render() {
    return (
      <>
        <div className="fix-overflow">
          <div className="home">
            {/* <DrawHeader />*/}
            <div className="hero-container">
              <Header />
              <div className="animation-div" id="animation-div">
                <ControlledLottie />{" "}
              </div>
             
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
