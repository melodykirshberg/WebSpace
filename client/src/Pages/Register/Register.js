import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import "./register.css"
import API from "../../utils/API";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import FormErrors from "../../components/FormErrors"

import Main from "../Main/Main";



class Register extends Component {

  //initial state of our form these are all the info we will require from the user. 
  state = {
    show: true,
    name: "",
    bio: "",
    website: "",
    company: "",
    email: "",
    motives: "",
    formErrors: { name: '', email: '' },
    nameValid: false,
    emaildValid: false,
    formValid: false

  }


  //when user insert a value 
  handleInputChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val })
  }


  //when form it's submmited we make a Post request to our DB to save the info
  handleSubmit = (e) => {

    e.preventDefault()
    API.saveUser({
      name: this.state.name,
      website: this.state.website,
      company: this.state.company,
      bio: this.state.bio,
      email: this.state.email,
      motives: this.state.motives

    }).then(res => console.log(res.data))
    this.setState({
      show: false
    })

    //redirects user to main page
    this.props.history.push('/main')

  }

  //passing the data trough props to our components Modal and Register Form


  render() {
    return (

      <form action="">

        <Modal aria-labelledby="contained-modal-title-vcenter"
          centered size="lg" show={this.state.show} onHide={this.handleClose}>

          <RegisterForm
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            formErrors={this.state.formErrors}
          />
        </Modal>



      </form>
    )
  }
}


export default Register