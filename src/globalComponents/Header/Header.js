import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import '../../App.css'
const Header = () => {
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="/">AudioBook PU</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link> */}
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="List of Chapters" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/chapter-one">Chapter 1</NavDropdown.Item>
                    <NavDropdown.Item href="/chapter-two">Chapter 2</NavDropdown.Item>
                    <NavDropdown.Item href="/chapter-three">Chapter 3</NavDropdown.Item>
                    <NavDropdown.Item href="/chapter-four">Chapter 4</NavDropdown.Item>
                    <NavDropdown.Item href="/chapter-five">Chapter 5</NavDropdown.Item>
                    <NavDropdown.Item href="/chapter-six">Chapter 6</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/test">Test</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="/chapters">Chapters</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
