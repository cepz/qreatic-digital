import React, { Component, Fragment } from 'react'
import Header from '../../ components/header'
import Navbar from '../../ components/navbar'
import Sidebar from '../../ components/sidebar'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

// import API from '../../service'

class Admin extends Component {
    state = {
        post: [],
        outlet: [],
    }

    render(){
        return (
        <Fragment>
            <nav className="admin">
                <Header/>
                <Navbar/>
                <div className="p-3 mb-2 bg-warning text-white mx-auto"><p className="mx-auto">.Example Warning Message</p></div>
                <Sidebar />
            </nav>
            <Container>
                <div className="col-md-8">

                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>id Outlet</th>
                        <th>Nama Outlet</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    </Table>
                </div>
            </Container>
        </Fragment>
        );
    }
}

export default Admin
