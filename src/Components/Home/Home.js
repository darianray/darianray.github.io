import './style.scss';

import p5 from 'p5';
import React, { Component } from 'react';
import Sketch, { loadImage } from 'react-p5';

import DrawHeader, { draw, setup } from '../DrawHeader/DrawHeader';
import Header from '../Header/Header';

//import Logo from "../../Images/logoGif.gif";
//import cloudTest from "../../../public/Images/";

let  cloud;

function preload(){
  cloud = loadImage("P5Images/catTest.jpg");
  }

class Home extends Component{
    x = 50
    y = 50
    
   

   

    setup = (p5, parent) => {
      p5.createCanvas(window.innerWidth, window.innerHeight).parent(parent)
     /// image("Images/cloudTest.png", 0, 0);
      //console.log("Height: ", window.innerHeight, "Width: ", window.outerWidth)
    }
    draw = p5 => {
      p5.image(cloud, this.x, this.y + 75)
      console.log("HI, this  cloud")
      p5.ellipse(this.x, this.y + 75, 100, 100)
      this.x++
  
   
    }

    // show(){
    
    // }

    render(){
  return (
    <>
    <body className='fix-overflow'>
    <div className="home">
      {/* <DrawHeader />*/}
      <div className="hero-container">
        <Header />
        {/*<img src="P5Images/catTest.jpg" alt=""/>  */}
      <div className="animation-div" id="animation-div"> <DrawHeader className = "draw-header"/></div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>  <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
       <strong> Hi, this is Home </strong><br></br>
       {/* <img src={Logo} alt="logoGif" /> */}

        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Proin semper iaculis neque eget rhoncus. Mauris lacus ipsum,
        tempor auctor est ut, sollicitudin eleifend est. Nulla tempus ex nulla,
        non porta nunc varius a. Proin pretium enim eget enim feugiat, sed
        mollis lacus dignissim. Aenean bibendum rutrum nisi sed auctor. Mauris
        fermentum, quam vel feugiat mollis, odio justo pellentesque tellus,
        fringilla consectetur enim nisi eget ipsum. Sed non elit ac ex pulvinar
        scelerisque. Vestibulum at gravida nisl, vel consequat nisi. Nam ut
        rutrum mauris. Donec sed nunc in augue facilisis aliquam id et dolor.
        Nullam at mauris tincidunt, eleifend magna quis, facilisis velit. Sed
        vulputate est non felis pharetra tincidunt. Maecenas dapibus justo at
        lectus tincidunt, et condimentum velit pharetra. Donec ante nisi,
        accumsan a magna sed, rutrum auctor nunc. Pellentesque tincidunt ex nec
        hendrerit ornare. Maecenas pharetra nisi feugiat efficitur sagittis.
        Suspendisse potenti. Ut eget laoreet elit. Suspendisse eleifend
        malesuada aliquam. In commodo nibh eget interdum iaculis. Sed eget ipsum
        et felis ultrices lacinia a nec ex. Sed elementum lorem ut tempus
        varius. Sed mauris est, fermentum et nisl non, suscipit pretium lorem.
        Cras tempor dui a lacus scelerisque lacinia. Integer et nibh nisl.
        Integer eu erat tincidunt, vehicula dolor sed, suscipit arcu. Donec
        venenatis ex id ipsum porta, quis pulvinar mauris placerat. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Morbi tempor interdum ex,
        eget luctus nisl congue id. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Sed ex erat, elementum cursus
        venenatis ac, porta sit amet lectus.
        </div>
      
     
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br></div></body>
    </>
  );
    }
}

export default Home;
