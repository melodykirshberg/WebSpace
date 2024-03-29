import React from "react"
import Card from 'react-bootstrap/Card'
import "./usercard.css"

// here we will map over our users and for each of them we will create a card that will hav name, bio, email, etc 
function UserCard(props) {
  return (
    <div className="container">
      <div className="row">
        {
          props.results && props.results.map(user => (
            <Card className="userCard flip-box" style={{ width: '13rem', height: '20rem' }} >
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <div className=" ">
                    <img className="userImage" src={user.picture} alt="userPicture" />
                    <h6 className="user-name text-center">{user.name}</h6>
                    <small className="smallMotives text-center">What brings {user.name} here today?</small>
                    <span className="align-center">
                      <p className=" text-center motives">{user.motives}</p>
                    </span>
                  </div>
                </div>
                <Card.Body className="flip-box-back">
                  <p className="about text-center"> About </p>
                  <p className="bio text-center ">{user.bio}</p>
                  <Card.Text>
                    <div className=" profile-info container-fluid">
                      <small className="smallProfession">Profession</small>
                      <p className="profession">{user.profession} </p>
                      <p className="email  "> <a href="mailto:">{user.email}</a> </p>
                    </div>
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          ))}
      </div>
    </div>
  )
}
export default UserCard