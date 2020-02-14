import React, {Component} from 'react';
import {Container, Col,Row,Jumbotron} from 'reactstrap';
import imga1 from "../../images/bizz.jpg";
import imga2 from "../../images/column.jpg";
import imga3 from "../../images/moni.jpg";
import imga4 from "../../images/pattern.jpg";
import '../styles/sect2.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Sect2 extends Component{
  render(){
    return(
      <Col className="bodie">
        <ScrollAnimation animateIn="fadeInRightBig"
          animateOut="fadeOutRightBig">
        <Jumbotron className="shadow-lg bg-transparent rounded">
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
        Titulo
      </h2>
        Cat ipsum dolor sit amet
        purrr purr littel cat, little cat purr purr give me attention or face the wrath of my claws, refuse to leave cardboard box. Cat is love, cat is life meow for food, then when human fills food dish, take a few bites of food and continue meowing for licks your face. Cereal boxes make for five star accommodation lick butt, so meow loudly just to annoy owners good now the other hand, too for meow meowing chowing and wowing sit by the fire. Sit in box jump off balcony, onto stranger's head

        </Col>
    </Row>
  </Col>
</Container>
</Jumbotron><br/>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeInLeftBig"
  animateOut="fadeOutLeftBig">
<Jumbotron className="shadow-lg bg-transparent rounded">
<Container>
  <Col>
    <Row>
    <Col className="posit">
      <img src={imga2}
      className="imgaiL shadow-lg bg-black rounded"
        alt="" />

    </Col>

    <Col className="textformL">
      <h2>
        Titulo
      </h2>
          Cat ipsum dolor sit amet, purrr purr littel cat, little cat purr purr give me attention or face the wrath of my claws, refuse to leave cardboard box. Cat is love, cat is life meow for food, then when human fills food dish, take a few bites of food and continue meowing for licks your face. Cereal boxes make for five star accommodation lick butt, so meow loudly just to annoy owners good now the other hand, too for meow meowing chowing and wowing sit by the fire.
        </Col>
    </Row>
  </Col>
</Container>
</Jumbotron>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeInRightBig"
  animateOut="fadeOutRightBig">
<Jumbotron className="shadow-lg bg-transparent rounded">
<Container>
  <Col>
    <Row>
    <Col className="posit" >
      <img src={imga3}
      className="imgaiR ml-5 shadow-lg bg-black rounded"
        alt="" />

    </Col>
    <Col className="textformR">
      <h2>
        Titulo
      </h2>
          Cat ipsum dolor sit amet, purrr purr littel cat, little cat purr purr give me attention or face the wrath of my claws, refuse to leave cardboard box. Cat is love, cat is life meow for food, then when human fills food dish, take a few bites of food and continue meowing for licks your face. Cereal boxes make for five star accommodation lick butt, so meow loudly just to annoy owners good now the other hand, too for meow meowing chowing and wowing sit by the fire.
        </Col>
    </Row>
  </Col>
</Container>
</Jumbotron>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeInLeftBig"
  animateOut="fadeOutLeftBig">
<Jumbotron className="shadow-lg bg-transparent rounded">
<Container>
  <Col>
    <Row>
    <Col className="posit">
      <img src={imga4}
      className="imgaiL shadow-lg bg-black rounded"
        alt="" />

    </Col>
    <Col className="textformL">
      <h2>
        Titulo
      </h2>
          Cereal boxes make for five star accommodation lick butt, so meow loudly just to annoy owners good now the other hand, too for meow meowing chowing and wowing sit by the fire. Sit in box jump off balcony, onto stranger's head so throw down all the stuff in the kitchen poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls cough hairball on conveniently placed pants climb a tree
        </Col>
    </Row>
  </Col>
</Container>
</Jumbotron>
</ScrollAnimation>
</Col>
    );
  }
}
