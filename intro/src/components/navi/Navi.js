import React, { Component } from "react";
import {
  Navbar,
 Container,
  Nav
  
} from "react-bootstrap";
import CartSummary from "../cart/cartSummary";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link >
                  <Link  to="/">
                  Ana Sayfa
                  </Link>
                  
                </Nav.Link>
              </Nav>
              <Nav>
                
              
<CartSummary></CartSummary>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
