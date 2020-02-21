import React from 'react';
import {Col,Jumbotron } from 'reactstrap';
import imga1 from "../../images/portfolio/bgtwo.jpg";
// CAMBIA LA IMAGEN EN SECT2
import '../styles/sect2.css';
import Plx from "react-plx";


const ParallaxDataI=[
  {
    start:"self",
    duration:"2000px",
    properties:[
      {
          startValue: 1,
          endValue:.0001,
          property:"opacity"
      },
      {
          startValue: 0,
          endValue:5,
          property:"blur"
      },
      {startValue:0,
      endValue:2000,
    property:"translateY"}
      ]
  }
]

const ParallaxDate=[
  {
    start:"self",
    duration:"100px",
    properties:[
      {
          startValue: 1,
          endValue:0,
          property:"opacity"
      },
      {startValue:0,
      endValue:100,
    property:"translateY"}
      ]
  }
]

const Example = () =>
<div className="bodie">
<Jumbotron className="titule">


  <Plx  parallaxData={ParallaxDate}>
    <Col className="image-container">
      <div className="textoo">
        <div>
        Juan Perez Perez
      </div>

      <div>
        Fotógrafo/Taquero
      </div>

    </div>
  </Col>
  </Plx>
</Jumbotron>

    <Plx  parallaxData={ParallaxDataI}>
  <img src={imga1}
        className="imglo shadow-lg bg-transparent"
        alt=""/>
        </Plx>

</div>
export default Example;
