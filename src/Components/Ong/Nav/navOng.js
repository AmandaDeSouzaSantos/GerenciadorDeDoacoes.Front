
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { PiUserCircleBold } from "react-icons/pi";

function NavOng() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Navbar.Brand as={NavLink} to="/" exact>
                Caixa de Entrada
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/messages" activeClassName="active-link">
                        Caixa de Entrada
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/donor-registration" activeClassName="active-link">
                       Donatario
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/donation-registration" activeClassName="active-link">
                        Doações
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/ngo-profile" activeClassName="active-link">
                        <PiUserCircleBold />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavOng;
