import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import API from "../../utils/API";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Jumbotron from 'react-bootstrap/Jumbotron'

import { Auth } from 'aws-amplify';




class Register extends Component {

  state = {
    show: true
  }

  //this handles the modal closing

  handleModalClose = () => {
    this.setState({ show: false });
  }

  //When page register loads we get the information from the logged user and send to our DB we store name, email and picture

  componentDidMount = () => {


    Auth.currentAuthenticatedUser()
      .then(function (data) {
        const userName = data.attributes.name
        const userEmail = data.attributes.email
        const userImage = data.attributes.picture
        // API.saveUser({
        //   name: userName,
        //   email: userEmail,
        //   picture: userImage
        // // })
        //   .then(res => console.log(res, "New User Added to webspacedb"))
        //   .catch(err => console.log(err));

      })


  }


  //passing the data trough props to our components Modal and Register Form


  render() {
    return (



      <Modal aria-labelledby=""

        centered size="lg" show={this.state.show} onHide={this.handleClose}>
        <Modal.Body>

          <RegisterForm
            handleModalClose={this.handleModalClose}
          />


        </Modal.Body>


      </Modal >




    )
  }
}


export default Register