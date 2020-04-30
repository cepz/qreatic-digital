import React, {useState} from 'react'
import {Modal,
        Button,
        CloseButton,
        Form} from 'react-bootstrap'

const ModalButton = props => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {className,
        buttonTitle,
        title} = props;

    return (
        <div className={className}>
            <Button variant="primary" onClick={handleShow}>
                {buttonTitle}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                size='lg'>

                <Modal.Header >
                    <Modal.Title>{title}</Modal.Title>
                    <CloseButton onClick={handleClose}/>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>id Outlet</Form.Label>
                        <Form.Control type="text" placeholder="Enter Outlet Id" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nama Outlet</Form.Label>
                        <Form.Control type="text" placeholder="Enter Outlet Name" />
                    </Form.Group>
                        <Button
                            variant="primary"
                            onClick={handleClose}
                            >
                            {buttonTitle}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalButton
