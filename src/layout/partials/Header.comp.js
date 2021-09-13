import React from 'react'
import { Navbar, Nav,  } from "react-bootstrap";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

//TODO: add logo image//

export const Header = () =>{
    return(
        <Navbar collapseOnSelect bg= "info" variant="dark" expand= "md">
            <Navbar.Brand>
            Header 
            </Navbar.Brand>
            <NavbarToggle aria-controls= "basic-navbar nav" />
            <NavbarCollapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/tickets">Tickets</Nav.Link>
                    <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )
}
