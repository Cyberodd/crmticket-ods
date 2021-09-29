import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import {useHistory} from "react-router-dom";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import {LinkContainer} from 'react-router-bootstrap'
//TODO: add logo image//

export const Header = () =>{
    const history = useHistory();
    const logOut = () =>{
        history.push("/");
    }

    return(
        <Navbar collapseOnSelect bg= "info" variant="dark" expand= "md">
            <Navbar.Brand>
            Header 
            </Navbar.Brand>
            <NavbarToggle aria-controls= "basic-navbar nav" />
            <NavbarCollapse id="basic-navbar-nav">
                <Nav>
                    <LinkContainer to="/dashboard"><Nav.Link >Dashboard</Nav.Link></LinkContainer>
                    <LinkContainer to="/ticket-list"><Nav.Link >Ticket List</Nav.Link></LinkContainer>
                    <LinkContainer to= "/tickets"><Nav.Link>Ticket</Nav.Link></LinkContainer>
                    <Nav.Link onClick={logOut}>Logout</Nav.Link>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )
}
