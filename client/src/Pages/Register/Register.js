import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import RegisterForm from "../../components/RegisterForm/RegisterForm";



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



    )
  }
}

export default Register