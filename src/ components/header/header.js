import React, { Component } from 'react'
import {Navbar,
        Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render() {
        return (
            <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Download posq mobile app</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Nav>
                    <Nav.Item>
                        <Nav.Link href="/saran">Kritik & saran</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/callus">Hubungi Kami</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/bantuan">Pusat Bantuan</Nav.Link>
                    </Nav.Item>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                </Navbar.Collapse>
            </Navbar>
            </>
        )
    }
}

export default Header
