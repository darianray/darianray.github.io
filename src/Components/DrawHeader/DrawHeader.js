import './style.scss';

import p5 from 'p5';
import React, { Component } from 'react';
import Sketch from 'react-p5';

import bigLogo from '../../PortfolioImages/bigLogo.png';
import HeaderImage from '../../PortfolioImages/HeaderImage.png';



export default function DrawHeader() {

  //create cloud array to hold multiple clouds
  let cloud = [];
  let blueCloud;
  let yellowCloud;
  let peachCloud;
  let backgroundImage;
  let logo;
  let x = 50;
  let extraX = 10;
  let negativeX = -50;
  let y = 50;
 
  var spot = {
    x: 100,
    y: 50,
  }

  function preload(p5) {
    blueCloud = p5.loadImage("P5Images/cloudTest.png")
    yellowCloud = p5.loadImage("P5Images/yellowCloud.png")
    peachCloud = p5.loadImage("P5Images/peachCloud.png")

    //load images into cloud array
    for(let i = 0; i < 5; i++){
      cloud[i] = p5.loadImage("P5Images/cloudTest.png");
    }
    backgroundImage = p5.loadImage(HeaderImage)
    logo = p5.loadImage(bigLogo)
  }

  function setup(p5, parent) {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(parent);
   // p5.image(imi, 2, 2);
   //p5.noLoop();
  }

  function draw(p5){
   // p5.background(backgroundImage)
  p5.clear();

  //draw clouds from cloud array
  p5.image(peachCloud, negativeX+1500, y+250, 400, 300);
  for(let i = 0; i < 5; i++){
    //random x value
    spot.x = Math.random(0, p5.innerWidth)
    //random y value
    spot.y = Math.random(0, p5.innerHeight)
   let r = Math.random(20, 60) * 100
    p5.image(cloud[i], (spot.x * 100)+x, y+spot.y, 400, 300);
    console.log("x ",spot.x)
    //ourX++
  }
  p5.image(logo, 500, 175)
  //p5.image(blueCloud, x+75, y, 400, 300);

  p5.image(yellowCloud, negativeX+1500, y + 600, 500, 300);
  p5.image(peachCloud, extraX-200, y+450, 400, 300);
  x++
  spot.x++
  negativeX-=2
  extraX+=3
   }
 
  return <Sketch preload={preload} setup={setup} draw={draw}/>;
}
