import React from 'react'
import {Nav,
        ListGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {icons} from '../image/icons'


function sidebar() {
    return (
        <>
            <Nav className='d-none d-md-block bg-light sidebar'>
                <div className="sidebar-sticky">
                    <ListGroup as='ul' className="nav flex-column">
                        <ListGroup.Item as='li' className="nav-item">
                            <icons.AiFillDashboard/> Dashboard
                        </ListGroup.Item>
                        <ListGroup.Item as='li' className="nav-item">
                            <icons.AiOutlineTransaction/> Transaksi
                        </ListGroup.Item>
                        <ListGroup.Item as='li' className="nav-item">
                            <icons.AiFillDatabase/> Laporan
                        </ListGroup.Item>
                        <ListGroup.Item as='li' className="nav-item" active>
                            <icons.FaProductHunt/> Produk
                        </ListGroup.Item>
                        <ListGroup.Item as='li' className="nav-item" >
                            <icons.AiOutlineShoppingCart/> Inventory
                        </ListGroup.Item>
                        <ListGroup.Item as='li' className="nav-item">
                            <icons.FaUserAlt/> Karyawan
                        </ListGroup.Item>
                        <ListGroup.Item as='li' className="nav-item">
                            <icons.FaUsers/> Pelanggan
                        </ListGroup.Item>
                        <ListGroup.Item as='li' className="nav-item">
                            <icons.FcServices/> Akun & Pengaturan
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Nav>
        </>
    )
}

export default sidebar
