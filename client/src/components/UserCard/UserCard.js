import React, { useReducer } from "react"
import Card from 'react-bootstrap/Card'
import "./usercard.css"




function UserCard(props) {

  return (
    <div className="container">
      <div className="row">
        {
          props.results.map(user => (


            <Card className="userCard flip-box" style={{ width: '14rem' }} >
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="col text-center">
                      <img className=" user-card-img " src="https://via.placeholder.com/180x160" width="" />
                    <h6 className="user-name text-center">{user.name}</h6>
                    </div>
                  </div>

                  <Card.Body className="flip-box-back">
                      <h6 className="user-name text-center">{user.name}</h6>
                      <Card.Text>
                        <p className="bio text-center">{user.bio}</p>
                        <div className=" profile-info     ">
                          <p className="email"> <small>Email:</small> <a href="mailto:">{user.email}</a> </p>
                          <p className="site"><small>Website:</small>{user.website}</p>
                          <p className="company"><small>Company:</small> {user.company}</p>
                          <small className="text-center">What brings {user.name} here today?</small>
                          <p className="motives">{user.motives}</p>
                        </div>
                      </Card.Text>
                  </Card.Body>
                </div>
            </Card>
          ))
        }
      </div>
    </div>

  )
}

export default UserCard