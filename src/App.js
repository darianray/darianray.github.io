import './App.css';

import React, { Component } from 'react';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';


class App extends Component {

    render(){
        return (
            
        <div className = "App">
        <Home />
        
        <About />
       
        <Portfolio />
        {/* {<Blog />} */}
        <Contact />
        </div>
    )}
   
}

export default App