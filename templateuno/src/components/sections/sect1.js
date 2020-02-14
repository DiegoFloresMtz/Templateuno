import React from 'react';
import { UncontrolledCarousel, Col, Row, Container } from 'reactstrap';
import imga1 from "../../images/portfolio/cinco.png";
import imga2 from "../../images/pattern.jpg";
import imga3 from "../../images/portfolio/seis.jpg";
import '../styles/sect2.css';


const items = [
  {
    src: imga1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: imga2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: imga1,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Example = () =>
<Container className="imglo">
  <Row>
    <Col>
      <UncontrolledCarousel items={items}/>;
    </Col>
  </Row>
</Container>
export default Example;
