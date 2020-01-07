import React, { useReducer } from "react"
import Card from 'react-bootstrap/Card'
import "./usercard.css"


// here we will map over our users and for each of them we will create a card that will hav name, bio, email, etc 

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
                    <img className=" my-2 userImage" src={require("./jen.png")} alt="userPicture" width="100" />
                    {/* <h6 className="user-name text-center">{user.name}</h6> */}
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