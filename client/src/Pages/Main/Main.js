import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import {Auth} from "aws-amplify";
// import UserModal from "../../components/UserModal/UserModal"
import API from "../../utils/API.js";
import "./main.css";
// import Container from "../../components/Container/Container"
import UserCard from "../../components/UserCard/UserCard"
import RegisterForm from "../../components/RegisterForm/RegisterForm";

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
        Auth.currentAuthenticatedUser()
        .then(function (data) {
            const userName = data.attributes.name
            const userEmail = data.attributes.email
            const userImage = data.attributes.picture
            API.saveUser({
                name: userName,
                email: userEmail,
                picture: userImage
            })
            .then(res => console.log(res, "New User Added to webspacedb"))
            .catch(err => console.log(err));
        })
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


    render() {
        return (
            <span>
                {/* <Container
                    results={this.state.users}
                /> */}
                <UserCard results={this.state.users} />
                <RegisterForm results={this.state.usersInfo} />
            </span>

        )
    }
}

export default Main 