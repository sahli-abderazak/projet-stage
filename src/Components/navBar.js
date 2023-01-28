import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    <Navbar bg="light" variant="light">
    <Container >
      <Navbar.Brand href="#home">
      Immobilier</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link id="textNav" as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link id="textNav" as={Link} to="/reservation">
          Reservation
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
   
  </div>
  )
}

export default NavBar