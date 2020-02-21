import React   from "react";
import {Container, Col, Row, Button, UncontrolledPopover, PopoverHeader, PopoverBody} from 'reactstrap';
import imga1 from "../../images/portfolio/uno.png";
import imga2 from "../../images/portfolio/dos.png";
import imga3 from "../../images/portfolio/tres.png";
import imga4 from "../../images/portfolio/cuatro.png";
import '../styles/sect3.css';
import ScrollAnimation from 'react-animate-on-scroll';


export default() => (


  <div className="imgshow">
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" >

  <Container>
    <p className="bodis">
      Portafolio Profesional
    </p>
    <Row>
      <Col sm="3" md={{ size: 3, order: 1 }}>
<Button id="tacos" type="button" className="btno bg-transparent shadow-lg">
  <img src={imga1}
        className="shadow-lg bg-transparent rounded"
        alt=""/>
</Button>
      </Col>

      <Col sm="3" md={{ size: 3, order: 2 }}>
<Button id="PopoverLegacy" type="button" className="btno bg-transparent shadow-lg">
  <img src={imga2}
        className="shadow-lg bg-transparent rounded"
          alt=""/>
</Button>
      </Col>

      <Col sm="3" md={{ size: 3, order: 4 }}>
<Button id="tacos" type="button" className="btno bg-transparent shadow-lg">
  <img src={imga3}
      className="shadow-lg bg-transparent rounded"
      alt=""/>
</Button>
      </Col>

      <Col sm="3" md={{ size: 3, order: 3 }}>
<Button id="PopoverLegacy" type="button" className="btno bg-transparent shadow-lg">
  <img src={imga4}
        className="shadow-lg bg-transparent rounded"
          alt=""/>
</Button>
    </Col>
</Row>
<br/>

<Row>
  <Col sm="3" md={{ size: 3, order: 1 }}>
<Button id="tacos" type="button" className="btno bg-transparent shadow-lg">
<img src={imga1}
    className="shadow-lg bg-transparent rounded"
    alt=""/>
</Button>
  </Col>


  <Col sm="3" md={{ size: 3, order: 2 }}>
<Button id="PopoverLegacy" type="button" className="btno bg-transparent shadow-lg">
<img src={imga2}
    className="shadow-lg bg-transparent rounded"
      alt=""/>
</Button>
  </Col>

  <Col sm="3" md={{ size: 3, order: 4 }}>
<Button id="tacos" type="button" className="btno bg-transparent shadow-lg">
<img src={imga3}
  className="shadow-lg bg-transparent rounded"
  alt=""/>
</Button>
  </Col>

  <Col sm="3" md={{ size: 3, order: 3 }}>
<Button id="PopoverLegacy" type="button" className="btno bg-transparent shadow-lg">
<img src={imga4}
    className="shadow-lg bg-transparent rounded"
      alt=""/>
</Button>
</Col>
</Row>
<br/>


<Row>
  <Col sm="3" md={{ size: 3, order: 1 }}>
<Button id="tacos" type="button" className="btno bg-transparent shadow-lg">
<img src={imga1}
    className="shadow-lg bg-transparent rounded"
    alt=""/>
</Button>
  </Col>

  <Col sm="3" md={{ size: 3, order: 2 }}>
<Button id="PopoverLegacy" type="button" className="btno bg-transparent shadow-lg">
<img src={imga2}
    className="shadow-lg bg-transparent rounded"
      alt=""/>
</Button>
  </Col>

  <Col sm="3" md={{ size: 3, order: 4 }}>
<Button id="tacos" type="button" className="btno bg-transparent shadow-lg">
<img src={imga3}
  className="shadow-lg bg-transparent rounded"
  alt=""/>
</Button>
  </Col>

  <Col sm="3" md={{ size: 3, order: 3 }}>
<Button id="PopoverLegacy" type="button" className="btno bg-transparent shadow-lg">
<img src={imga4}
    className="shadow-lg bg-transparent rounded"
      alt=""/>
</Button>
</Col>
</Row>
<br/>


<Row>
  <Col sm="3" md={{ size: 3, order: 1 }}>
<Button id="tacos" type="button" className="btno bg-transparent shadow-lg">
<img src={imga1}
    className="shadow-lg bg-transparent rounded"
    alt=""/>
</Button>
  </Col>

  <Col sm="3" md={{ size: 3, order: 2 }}>
<Button id="PopoverLegacy" type="button" className="btno bg-transparent shadow-lg">
<img src={imga2}
    className="shadow-lg bg-transparent rounded"
      alt=""/>
</Button>
  </Col>

  <Col sm="3" md={{ size: 3, order: 4 }}>
<Button id="tacos" type="button" className="btno bg-transparent shadow-lg">
<img src={imga3}
  className="shadow-lg bg-transparent rounded"
  alt=""/>
</Button>
  </Col>

  <Col sm="3" md={{ size: 3, order: 3 }}>
<Button id="PopoverLegacy" type="button" className="btno bg-transparent shadow-lg">
<img src={imga4}
    className="shadow-lg bg-transparent rounded"
      alt=""/>
</Button>
</Col>
</Row>
<br/>

  </Container>
  </ScrollAnimation>
<UncontrolledPopover trigger="legacy" placement="auto" target="PopoverLegacy">
   <PopoverHeader>Tu Arte</PopoverHeader>
   <PopoverBody>
     Aqui va tu reseña alv

     </PopoverBody>
     </UncontrolledPopover>

     <UncontrolledPopover trigger="legacy" placement="auto" target="tacos">
        <PopoverHeader>Mi arte</PopoverHeader>
        <PopoverBody>
          Mira namas este pack
          <img src={imga4}
              className="shadow-lg bg-transparent rounded"
                alt=""/>
        </PopoverBody>
          </UncontrolledPopover>

</div>
)
