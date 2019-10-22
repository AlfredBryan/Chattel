import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

import "./style.css";

class CustomNav extends React.Component {
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
    return (
      <div>
        <Navbar light expand="md" className="navbar_main" fixed="top">
          <NavbarBrand className="logo_text" href="/">
            Chattel
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/features">Features</Link>
              </NavItem>
              <NavItem>
                <Link to="/properties">Properties</Link>
              </NavItem>
              <NavItem>
                <Link to="/components/">About Us</Link>
              </NavItem>
              <NavItem>
                <Link to="/testimonials">Testimonials</Link>
              </NavItem>
              <NavItem>
                <Link to="/components/">Contact Us</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CustomNav;
