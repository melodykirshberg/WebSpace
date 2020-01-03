

import Modal from 'react-bootstrap/Modal'
import React, { useState } from "react";



function UserModal() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button variant="primary" onClick={handleShow}>
                Launch demo modal
        </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
            </button>
                    <button variant="primary" onClick={handleClose}>
                        Save Changes
            </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default UserModal