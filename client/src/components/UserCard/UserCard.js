import React, { useReducer } from "react"
import Card from 'react-bootstrap/Card'
import "./usercard.css"




function UserCard(props) {

    return (
        <div className="container">
            <div className="row">
                {
                    props.results.map(user => (



                        <Card className="userCard " style={{ width: '15rem' }} >
                            <div className="col text-center">
                                <img className=" user-card-img " src="" width="80" />
                            </div>

                            <Card.Body>
                                <h6 className="user-name text-center">{user.name}</h6>
                                <Card.Text>
                                    <p className="bio text-center">{user.bio}</p>

                                    <div className=" profile-info     ">
                                        <p className="email"> <small>Email:</small> <a href="mailto:">{user.email}</a> </p>
                                        <p className="site"><small>Website:</small>{user.website}</p>
                                        <p className="company"><small>Company:</small> {user.company}</p>
                                        <span>
                                            <small className="text-center">What brings {user.name} here today?</small>
                                        </span>
                                        <p className="motives">{user.motives}</p>
                                    </div>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div>

    )
}

export default UserCard