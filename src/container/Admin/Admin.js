import axios from 'axios'
import React, { Component, Fragment } from 'react'

import Header from '../../ components/header'
import Sidebar from '../../ components/sidebar'
import {Container,
    Table} from 'react-bootstrap'

import {icons} from '../../ components/image/icons'
import ModalButton from '../../ components/modalButton'
import { Link } from 'react-router-dom'
// import API from '../../service'

class Admin extends Component {
    state = {
            response: [],
            modif:[],
    }

    getApi = () => {
        const token = 'SVTY5YG2uRoWCm0W5r6GjnleeaBI8AstKTUQ1fXQoepBRv7fvqk3amqUgtep'
        const url = 'https://dev-wma-051.qreatiq.net/public/api/admin/modifier/r1'
        axios.get(`${url}?idAccount=1&token=${token}`)
        .then(res => {
            // console.log('response : ', res.data.response.arrOutlet);
            this.setState({
                response : res.data.response.arrOutlet,
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    getApiAgain = () => {
        const token = 'SVTY5YG2uRoWCm0W5r6GjnleeaBI8AstKTUQ1fXQoepBRv7fvqk3amqUgtep'
        const url = 'https://dev-wma-051.qreatiq.net/public/api/admin/modifier/r1'
        axios.get(`${url}?idAccount=1&token=${token}`)
        .then(res => {
            // console.log('response : ', res.data.response.arrModifGrpResult);
            this.setState({
                modif : res.data.response.arrModifGrpResult
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
        this.getApi()
        this.getApiAgain()
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
                {/* router here */}
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
                                            <tr key={outlet.idOutlet}>
                                                    <td>{outlet.idOutlet}</td>
                                                    <td>{outlet.nmOutlet}</td>
                                                </tr>)
                                    })
                                }
                            </tbody>
                        </Table>

                        <ModalButton
                            title='Opsi Tambahan'
                            className="float-right"
                            buttonTitle="Tambah Opsi Tambahan"
                            />

                        <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Nama Set</th>
                                        <th colSpan={2}>Opsi Tambahan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.modif.map((modify) => {
                                        return (
                                            <tr key={modify.idModifGrp}>
                                                    <td>
                                                        <Link to={`/admin/${modify.nmModifGrp}`}>
                                                            {modify.nmModifGrp}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        {modify.arrModif.map(arr => arr.nmModif)}
                                                    </td>
                                                    <td><button className="primary">Tambah Ke Produk</button></td>
                                                </tr>)
                                    })
                                }
                                </tbody>
                        </Table>
                    </div>
                {/* router here */}
                </div>

            </Container>
        </Fragment>
        );
    }
}

export default Admin
