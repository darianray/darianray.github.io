import './App.css';
import React, {Component} from "react";
import About from "./Components/About/About"
import Blog from "./Components/Blog/Blog"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import Portfolio from "./Components/Portfolio/Portfolio"
import Sketch from "react-p5";


class App extends Component {


    x = 50
    y = 50
  
    setup = (p5, parent) => {
      p5.createCanvas(500, 500).parent(parent)
    }
    
    draw = p5 => {
      
      p5.ellipse(this.x, this.y, 70, 70)
      this.x++
    }
    render(){
        return (
            
        <div className = "App">
        <Home />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
        <Sketch setup={this.setup} draw={this.draw} />
        </div>
    )}
   
}

export default App