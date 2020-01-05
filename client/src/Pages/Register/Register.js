import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import "./register.css"
import API from "../../utils/API";
import RegisterForm from "../../components/RegisterForm";



class Register extends Component {

  //initial state of our form

  state = {
    show: true,
    name: "",
    bio: "",
    website: "",
    company: "",
    email: "",
    motives: "what brings you here today..?",
    errormessage: '',


  }


  // componentDidMount = () => {
  //   this.setState({
  //     show: true
  //   })


  // }

  // handleClose = () => {
  //   this.setState({
  //     show: false
  //   })
  // }

  // handleShow = () => {
  //   this.setState({
  //     state: true
  //   })
  // }
  handleInputChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val })



  }
  //when form it's submmited we make an Post request to our DB
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



  }





  render() {
    return (

      <form action="">
        <Modal aria-labelledby="contained-modal-title-vcenter"
          centered size="lg" show={this.state.show} onHide={this.handleClose}>

          <RegisterForm
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
          />

        </Modal>
      </form>
    )
  }
}


export default Register