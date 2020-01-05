import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import "../pic.jpg";
import "./usermodal.css";



function UserModal(props) {
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

                </Modal.Header>
                <Modal.Body>

                    <div className="container">

                        <div className="row">

                            <div className="col-4">
                                <div className="row">
                                    <img src="./pic.jpg" alt="pic" />
                                </div>

                                <div className="row">
                                    <p>User Name</p>
                                </div>

                            </div>


                            <div className="col-8">

                                <div className="row">

                                    <p>Email:</p>
                                </div>
                                <div className="row">

                                    <p>Website:</p>
                                </div>
                                <div className="row">

                                    <p>Company:</p>
                                </div>

                                <div className="row">

                                    <p>What brings User here today?</p>
                                </div>



                            </div>




                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}


export default UserModal