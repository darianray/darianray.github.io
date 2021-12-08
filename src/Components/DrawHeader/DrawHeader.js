import './style.scss';

import p5 from 'p5';
import React, { Component } from 'react';
import Sketch from 'react-p5';

import bigLogo from '../../PortfolioImages/bigLogo.png';
import HeaderImage from '../../PortfolioImages/HeaderImage.png';



export default function DrawHeader() {

  //create cloud array to hold multiple clouds
  let clouds = [];
  let cloud;
  let backgroundImage;
  let logo;
  let x = 50;
  let y = 50;

  //holds position of clouds
  var cloudPosition = [];

  
  p5.disableFriendlyErrors = true; // disables FES
  
  function preload(p5) {

    //load images into cloud array
    for(let i = 0; i < 5; i++){
      clouds[i] = p5.loadImage("P5Images/cloudTest.png");
    }
    cloud = p5.loadImage("P5Images/cloudTest.png");
    backgroundImage = p5.loadImage(HeaderImage)
    logo = p5.loadImage(bigLogo)
  }

  function setup(p5, parent) {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(parent);
  
    //call cloud spawn
    cloud_spawn(p5)

    
 // p5.noLoop();
 
  }

  function draw(p5){
    // for (let i = 0; i < clouds.length; i++) {
    //   clouds[i].position.x += clouds[i].width * 0.01;
    //   if (clouds[i].position.x > p5.innerWidth) {
    //     clouds[i].position.x = 0;
      
    //   }
    // }
    p5.clear();
  p5.image(logo, 500, 175)
  
 // p5.image(cloud, x+75, y+300, 400, 300);
 
  cloud_spawn(p5)
  cloudMove();
// p5.noLoop();


   }

  function cloud_spawn(p5){
    // for (let i = 0; i < 10; i++) {
    //   let c = createSprite(
    //     random(width), random(height),
    //     random(25, 100), random(25, 100));
    //   c.shapeColor = color(random(200, 255));
    //   clouds.add(c);
    // }
   for(var i=0; i<3; i++){
            var positionx = 10;
            var positiony = Math.random(100, 300)*1000;
            var randomSpeed = Math.random(2, 4)*10;

            //pushes two values into CloudPosition. X and Y
            cloudPosition.push([positionx + i, positiony + i, randomSpeed]);
            //set x and y to  this. i is the cloud itself, 0 is the x and 1 is the y

            p5.image(cloud,cloudPosition[i][0], cloudPosition[i][1], 400, 300);
           
            
        }
     //   p5.image(cloud, x+175, y+500, 400, 300);
    console.log("Cloud spawn is working")
//
}

////x is UPDATING
//So cloud image is not properly bound to the x...???

function cloudMove(){
  for(var i = 0; i < cloudPosition.length; i++)
  {
    console.log("Cloud: ", i, "X: ", cloudPosition[i][0], "Y: ", cloudPosition[i][1])
    //set x and y to  this. i is the cloud itself, 0 is the x and 1 is the y
    
     cloudPosition[i][0] += cloudPosition[i][2]; //Move the cloud to the right
    
   
  }
  x++
  console.log("Move")
}

  return <Sketch preload={preload} setup={setup} draw={draw}/>;
}
