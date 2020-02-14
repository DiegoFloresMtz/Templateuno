import React from "react";
import {Container, Col, Row, Button} from 'reactstrap';
import imga1 from "../../images/portfolio/uno.png";
import imga2 from "../../images/portfolio/dos.png";
import imga3 from "../../images/portfolio/tres.png";
import imga4 from "../../images/portfolio/cuatro.png";
import imga5 from "../../images/portfolio/cinco.png";
import '../styles/sect3.css';

export default() => (
  <Container className="imgshow">
    <Row>
      <Col sm="3" md={{ size: 3, order: 1 }}>
<Button className="bg-transparent shadow-lg">
  <img src={imga1}
        className="shadow-lg bg-transparent rounded"
        alt=""/>
</Button>
      </Col>

      <Col sm="3" md={{ size: 3, order: 2 }}>
<Button className="bg-transparent shadow-lg">
  <img src={imga2}
        className="shadow-lg bg-transparent rounded"
          alt=""/>
</Button>
      </Col>

      <Col sm="3" md={{ size: 3, order: 4 }}>
<Button className="bg-transparent shadow-lg">
  <img src={imga3}
      className="shadow-lg bg-transparent rounded"
      alt=""/>
</Button>
      </Col>

      <Col sm="3" md={{ size: 3, order: 3 }}>
<Button className="bg-transparent shadow-lg">
  <img src={imga4}
        className="shadow-lg bg-transparent rounded"
          alt=""/>
</Button>
    </Col>
</Row>

  </Container>

)
