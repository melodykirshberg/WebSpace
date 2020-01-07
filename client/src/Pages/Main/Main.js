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


    // this is the initialization, what do you want the page to display when page it's first loaded
    // When page it's loaded go make an API call to our DB and get all USERS

    componentDidMount() {
        API.getUsers().then(res => this.setState({
            users: res.data,


        })).catch(err => console.log(err))



    }

    //then we passes the users to our UserCard component

    render() {
        return (
            <div>
                <UserCard results={this.state.users} />

            </div>

        )
    }
}

export default Main 