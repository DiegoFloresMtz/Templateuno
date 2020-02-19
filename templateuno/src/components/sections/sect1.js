import React from 'react';
import {Col, Row, Container,Jumbotron } from 'reactstrap';
import imga1 from "../../images/portfolio/cinco.png";
import imga2 from "../../images/pattern.jpg";
import imga3 from "../../images/portfolio/seis.jpg";
import '../styles/sect2.css';
import Plx from "react-plx";
import ScrollAnimation from 'react-animate-on-scroll';


const ParallaxDataI=[
  {
    start:"200px",
    duration:"1200px",
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
      endValue:1000,
    property:"translateY"}
      ]
  }
]

const ParallaxDate=[
  {
    start:"self",
    duration:"50px",
    properties:[
      {
          startValue: 1,
          endValue:0,
          property:"opacity"
      },
      {startValue:0,
      endValue:50,
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
        Aqui va tu reseña eseeee
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
