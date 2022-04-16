import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar className='' collapseOnSelect expand="lg" bg="white" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/home">
            <img height='30px' src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='text-right'>
            <Nav.Link className='text-dark fw-bold' as={Link} to="/login">Log In</Nav.Link>
            <Nav.Link className='text-dark fw-bold btn btn-primary rounded-pill p-1 ' as={Link} to="/signup">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;