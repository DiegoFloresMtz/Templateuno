import React, {Component} from 'react';
import {Container, Col,Row,Jumbotron} from 'reactstrap';
import imga1 from "../../images/bizz.jpg";
import imga2 from "../../images/column.jpg";
import imga3 from "../../images/moni.jpg";
import Plx from "react-plx";
import '../styles/sect2.css';
import ScrollAnimation from 'react-animate-on-scroll';

const ParallaxDati=[
  {
    start:"1200px",
    duration:"1000px",
    properties:[
      {
        startValue:0,
      endValue:-800,
    property:"translateY"
  }
      ]
  }
]

export default class Sect2 extends Component{
  render(){
    return(

      <Col className="bodiees">
          <Plx  parallaxData={ParallaxDati}>
        <ScrollAnimation animateIn="fadeInRight"
          animateOut="fadeOutRight">
        <Jumbotron className="jumbotron-fluid shadow-lg bg-transparent  rounded">
<Container>
  <Col>
    <Row>
    <Col className="">
      <img src={imga1}
      className="imgaiR shadow-lg bg-black rounded"
        alt=""/>
    </Col>

    <Col className="textformR">
      <h2>
        Nombre de la Obra
      </h2>
        Reseña pequeña, ser o no ser.

        </Col>
    </Row>
  </Col>
</Container>
</Jumbotron><br/>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeInLeft"
  animateOut="fadeOutLeft">
<Jumbotron className="jumbotron-fluid shadow-lg bg-transparent rounded">
<Container>
  <Col>
    <Row>
    <Col className="posita">
      <img src={imga2}
      className="imgaiL shadow-lg bg-black rounded"
        alt="" />

    </Col>

    <Col className="textformL">
      <h2>
        Nombre de la Obra
      </h2>
      Reseña pequeña, ser o no ser.

        </Col>
    </Row>
  </Col>
</Container>
</Jumbotron>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeInRightBig"
  animateOut="fadeOutRightBig">
<Jumbotron className="jumbotron-fluid shadow-lg bg-transparent rounded">
<Container>
  <Col>
    <Row>
    <Col className="posita" >
      <img src={imga3}
      className="imgaiR shadow-lg bg-black rounded"
        alt="" />

    </Col>
    <Col className="textformR">
      <h2>
        Nombre de la Obra
      </h2>
      Reseña pequeña, ser o no ser.

        </Col>
    </Row>
  </Col>
</Container>
</Jumbotron>
</ScrollAnimation>

</Plx>
</Col>
    );
  }
}
