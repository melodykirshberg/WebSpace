import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import API from "../../utils/API";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
// import { Router } from "express";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../Main/Main";

class Register extends Component {

  state = {
    show: true
  }

  //this handles the modal closing in our Register Form component
  //after modal it's closed , it redirects the user to Main page

  handleModalClose = () => {
    this.setState({ show: false });
    this.props.history.push("/main");
  }

  //passing the data trough props to our components Modal and Register Form
  render() {
    return (
      <Router>
        <Modal
          aria-labelledby=""
          centered size="lg"
          show={this.state.show}
          onHide={this.handleClose}>
          <Modal.Body>
            <RegisterForm
              handleModalClose={this.handleModalClose} />
          </Modal.Body>
        </Modal >

        {/* <Main /> */}
      </Router>
    )
  }
}

export default Register