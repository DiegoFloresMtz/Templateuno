import React,{Component} from 'react';
import { Link } from "gatsby"
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
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
      <Navbar className="nav_bar bg-transparent" fixed="top" expand={true} light>
        <NavbarBrand tag={Link} to="/">
          <img src={logo} className="img-fluid logo" alt=""/>
        </NavbarBrand>
        {/* <NavbarToggler onClick={this.toggle} /> */}
          <Nav className="ml-auto" navbar>
            <NavItem className="pt-1">
                <NavLink className="menus" onClick={this.toggle}>
                  MENU
                </NavLink>
              </NavItem>
          </Nav>
      </Navbar>
      <SlideMenu toggle={this.toggle} isOpen={this.state.isOpen} />
      </>

    );
  }
}

function SlideMenu({isOpen,toggle}){
  return(
    <Container fluid className={`slideout ${isOpen&&' slidein'} d-flex flex-column justify-content-around align-items-start`} >
      <Nav>
      <NavLink>
  <hr className="line" width="25%" align="left"/>
        <ul className="menuinicio">
        INICIO<br/>
  <a className="menutext" href="">¿Qué hacemos?</a> <br/>
  <a className="menutext" href="">Como funciona</a> <br/>
  <a className="menutext" href="">Casos de éxito</a> <br/>
  <a className="menutext" href="">Precios</a> <br/>

</ul>
  <hr className="line" width="25%" align="left"/>
      </NavLink>

      </Nav>

    </Container>
  )
}
