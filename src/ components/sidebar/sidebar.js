import React from 'react'
import {
    Nav} from 'react-bootstrap'


function sidebar() {
    return (
        <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                Dashboard
            </div>
        </Nav>
    )
}

export default sidebar
