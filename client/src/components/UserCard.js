import React from "react"
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'



function UserCard(props) {

    return (
        <div className="container">
            <Card style={{ width: '12rem' }}>
                <div className="col">
                    <img className="center-align    " variant="top" src={require('./pic.jpg')} width="100" />
                </div>

                <Card.Body>
                    <h6> Jason Will</h6>
                    <Card.Text>
                        <div className="col profile-info     ">
                            <p className="mx-0">Hey I'm Jason and I would love to connect with other enginners</p>
                            <p className="mx-0">test@gmail.com</p>
                            <p className="mx-0">www.test.com</p>
                            <p className="mx-0">Amazon</p>

                        </div>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div >
    )
}

export default UserCard