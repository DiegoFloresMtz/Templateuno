import React from 'react';
/*import {Link} from 'gatsby';*/
import {Container,Row,Col,Nav,NavItem,NavLink} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import logo from '../images/logo/logo.svg';
import './styles/footer.css';

const Footer=(props)=>{
return (
 <Container tag="footer" fluid className="footer p-5 text-left text-light animated fadeInPlace">
   <Container>
     <Row className="mb-5">
       <Col>
         <img src={logo} alt=""/>
       </Col>

     <Col>
       <h4>
         Newsletter
       </h4>
     </Col>

     <Col>
       <h4>
         Redes Sociales
       </h4><br/>
       <div className="icon_cont text-center ">
         <a className="icon_footer" target="_blank" rel="noopener noreferrer" href="facebook.com">
           <FontAwesomeIcon size="lg" icon={['fab','facebook-f']}/>
         </a>

         <a className="icon_footer" target="_blank" rel="noopener noreferrer" href="instagram.com">
           <FontAwesomeIcon size="lg" icon={['fab','instagram']}/>
         </a>
       </div>
     </Col>

     <Col>
       <h4>
         Mapa de sitio
       </h4>
  <Nav >
    <NavItem className="naviba">
      <NavLink href="">
          Home
      </NavLink>
      <NavLink href="">
          Panel
      </NavLink>
      <NavLink href="">
          Preguntas frecuentes
      </NavLink>
      <NavLink href="">
          Política de privacidad
      </NavLink>
      <NavLink href="">
          Terminos y condiciones
      </NavLink>
    </NavItem>
  </Nav>

     </Col>
   </Row>

     <Row className="text-center">
       <Col>
         <small>
           Copyright © {new Date().getFullYear()} Nutri&Love
        </small>
       </Col>
     </Row>

     <Row className="text-center">
       <Col>
         <small>
           Hecho con CORAZONROJOCONMARCONEGRO.PNG por:
        </small>
       </Col>
     </Row>
   </Container>
 </Container>
)
}

export default Footer
