import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../../images/logo.jpg';
import './NavBar.css'

const NavBar = () => {

    return (
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand href="/home">
                    <img height="80" width="80" className="logo-style" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-center">
                        <Nav.Link as={Link}  className="text-white px-md-4 link-style" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link}  className="text-white px-md-4 link-style" to="/skill">Skill</Nav.Link>
                        <Nav.Link as={Link}  className="text-white px-md-4 link-style" to="/projects">Project</Nav.Link>
                        <Nav.Link as={Link}  className="text-white px-md-4 link-style" to="/blogs">Blog</Nav.Link>
                        <Nav.Link as={Link}  className="text-white px-md-4 link-style" to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link}  className="text-white px-md-4 link-style mx-md-3 active" to="/resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;