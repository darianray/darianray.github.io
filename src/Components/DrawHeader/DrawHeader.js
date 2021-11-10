import React, { Component } from "react";
//import CatTest from "../../Images/cloudTest.png"
import "./style.scss";
import HeaderImage from "../../PortfolioImages/HeaderImage.png"
import Sketch from "react-p5";
import bigLogo from "../../PortfolioImages/bigLogo.png"
import p5 from "p5";

// function preload() {
//   img = loadImage("P5Images/catTest.jpg");
// }
// x = 50;
// y = 50;
export default function DrawHeader() {
  let imi;
  let backgroundImage;
  let logo;
  let x = 50;
  let y = 50;
  //p5.loadImage("P5Images/catTest.jpg")
  function preload(p5) {
    imi = p5.loadImage("P5Images/cloudTest.png");
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
    p5.image(logo, 500, 175)
  //   console.log("This is the draw function")
  //  new p5.Image("P5Images/catTest.jpg", 25, 25);
  // // console.log("This :P: ", img.innerHeight)

  p5.image(imi, x, y, 200, 200);
  x++
   }
  // draw() {
  //  // const p5 = this.p5;

  //  p5.image(img, 0, 0)

  // }

  return <Sketch preload={preload} setup={setup} draw={draw}/>;
}
