import React,{Component} from 'react';
import { Link } from "gatsby"
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {motion} from 'framer-motion';

import logo from '../images/logo/logo.svg'
import './styles/navb.css';

export default class Navb extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {isOpen} = this.state
    return (
      <>
      <Navbar className="nav_bar bg-transparent " fixed="top"  light>
        <NavbarBrand tag={Link} to="/">
          <img src={logo} className="img-fluid logo" alt=""/>
        </NavbarBrand>
        {/* <NavbarToggler onClick={this.toggle} /> */}
          <Nav className="ml-auto" navbar>
            <NavItem className="pt-1">
                <NavLink className="menus" onClick={this.toggle}>
                  {isOpen?"CERRAR":"MENU"}
                </NavLink>
              </NavItem>
          </Nav>
      </Navbar>
      <SlideMenu toggle={this.toggle} isOpen={isOpen} />
      </>

    );
  }
}

function SlideMenu({isOpen,toggle}){
  return(
    <Container fluid className={`menu_layout ${isOpen?'slidein':'slideout'} d-flex flex-column justify-content-around align-items-start`} >
      <Container>
        <Row>
          <Col xs={1}>
            <hr className="line hr_pink" align=""/>
          </Col>
          <Col xs={11}>
              <Nav vertical>
                <h3 className="menuinicio">Inicio</h3>
                <br/>
                <NavItem>
                  <NavLink onClick={toggle} className="menutext" href="#quehacemos">Quienes somos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={toggle} className="menutext" href="#comofunciona">Como lo hago mejor</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={toggle} className="menutext" href="#casosexito">Paquetes o clientes felices</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={toggle} className="menutext" href="#precios">Galeria</NavLink>
                </NavItem>
              </Nav>
              <br/>
              <hr className="line hr_pink" width="13%" align="left"/>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Nutri.and.love/">
                  <FontAwesomeIcon className="text-white" size="2x" icon={['fab','facebook']}/>
                </a>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nutri.and.love/?hl=es-la">
                  <FontAwesomeIcon className="text-white" size="2x" icon={['fab','instagram']}/>
                </a>

              </div>
          </Col>
        </Row>
      </Container>


    </Container>
  )
}
