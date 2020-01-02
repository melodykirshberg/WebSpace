import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { useState } from "react";



function UserModal() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="container">
                <Button className="button  btn" variant="primary" onClick={handleShow}>
                    Launch demo modal
      </Button>

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                    <div className="col-12 text-center">

                        <h5>Cibelle Montor</h5>
                    </div>

                </Modal.Header>


                <Modal.Body>
                    Bio:<br />
                    email:<br />
                    Company:
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
              </Button>
                    <Button onClick={handleClose}>
                        Save Changes
              </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserModal