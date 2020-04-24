import React from 'react'
import { Navbar,
        Nav,
        InputGroup,
        FormControl,
        NavItem} from 'react-bootstrap'

import Image from 'react-bootstrap/Image'
import profile from './profile/profile.jpg'

import {icons} from '../icons'

function navbarHeader() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <Image
                    src={profile}
                    roundedCircle
                    alt="profile"
                    width="50px"/>
                    <span> Nama Bisnis</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavItem>
                            <InputGroup className="mb-2">
                                <FormControl
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2"> <icons.FcSearch/> </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </NavItem>
                        <NavItem>
                                <span> | <icons.FaListUl/> Fillter </span>
                        </NavItem>
                    </Nav>
                    <NavItem>
                            <icons.FaBell/> 
                    </NavItem>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default navbarHeader
