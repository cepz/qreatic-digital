import axios from 'axios'
import React, { Component, Fragment } from 'react'

import Header from '../../ components/header'
import Sidebar from '../../ components/sidebar'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import {icons} from '../../ components/icons'
// import API from '../../service'

class Admin extends Component {
    state = {
        response: [],
    }

    getApi = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            // console.log('response : ', res.data);
            this.setState({
                response : res.data
            })
        })
        .catch(err => {
            // console.log(err)
        })
    }

    componentDidMount(){
        this.getApi()
    }

    render(){
        return (
        <Fragment>
            <Container>
                    <nav className="admin">
                        <Header/>
                        <div className="p-3 mb-2 bg-warning text-white" align="center">
                           <p> <icons.BsExclamationTriangleFill/> Example Warning Message </p>
                        </div>
                    </nav>
                <div className='row'>
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>id Outlet</th>
                                    <th>Nama Outlet</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.response.map(outlet => {
                                        return (
                                        <tr key={outlet.id}>
                                            <td>{outlet.id}</td>
                                            <td>{outlet.title}</td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </Fragment>
        );
    }
}

export default Admin
