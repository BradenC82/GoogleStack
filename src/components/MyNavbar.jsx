import React, { Component } from 'react'

import { Navbar, Nav } from 'react-bootstrap'

export default class MyNavbar extends Component {
    render() {
        return (
            <Navbar fixed='top' bg="light" expand="lg" >
                <Navbar.Brand href="#home">
                    🍔 Munchly</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto mr-2">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
