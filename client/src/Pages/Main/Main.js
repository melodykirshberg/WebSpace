import React, { Component } from "react";
import NavBarMain from "../../components/Nav/Nav";
import UserModal from "../../components/UserModal/UserModal"
import API from "../../utils/API";
import "./main.css";
import Container from "../../components/Container/Container"
import UserCard from "../../components/UserCard/UserCard"

// when page loads, I want to load all users from the database and pass as to ShowUserModal component


// In this class we have written the logic that is going to happen in the Main page

class Main extends Component {

    // Setting the component's initial state. PS: states are the component properties,
    // each component can have one or mutiples states

    state = {
        users: [],
        clickedUser: []
    }


    // this is the initialization, what do you want the page to display when page it's first loaded
    // When page it's loaded go make an API call to our DB and get all USERS

    componentDidMount() {
        API.getUsers().then(res => this.setState({
            users: res.data,
            clickedUser: res.data

        })).catch(err => console.log(err))

    }
    // this function handles when a participant it's clicked
    // it will loop trough all the objects(users) in our DB and it will look for the one where the ID matched the ID that was clicked
    handleUserClick = event => {
        const users = this.state.users

        const userChoice = event.target.value;
        const clickedUser = users.filter(user =>
            user._id === userChoice._id)
        if (!clickedUser) {
            console.log("no One")
        }
        console.log(clickedUser)

        this.setState({
            clickedUser
        })

    }


<<<<<<< HEAD
  render() {
    return (
      <span>
        <UserModal />
      </span>
=======
    render() {
        return (
            <span>
                <NavBarMain />
                {/* <Container
                    results={this.state.users}
                /> */}
                <UserCard results={this.state.users} />
            </span>
>>>>>>> a776786c33396d5654a4d1b41798f572e3ceec5e

        )
    }
}

export default Main 