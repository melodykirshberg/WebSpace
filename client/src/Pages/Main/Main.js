import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import API from "../../utils/API.js";
import "./main.css";
import UserCard from "../../components/UserCard/UserCard"


// In this class we have written the logic that is going to happen in the Main page

class Main extends Component {

    // Setting the component's initial state. PS: states are the component properties,
    // each component can have one or mutiples states
    state = {
        users: [],

    }


    // this is the initialization, what do you want the page to do when page it's first loaded
    // When page it's loaded go make an API call to our DB and get all USERS
    //then we update the users state. Iniatilly it was empty, now holds all our users

    componentDidMount() {
        API.getUsers().then(res => this.setState({
            users: res.data,

        })).catch(err => console.log(err))
    }





    //then we passes the users we grabed from db to our UserCard component
    // "results" in the usercard component holds the most recent user state, in our case a refreshed 

    render() {
        return (
            <div className="container">
                <UserCard results={this.state.users} />

            </div>

        )
    }
}

export default Main 