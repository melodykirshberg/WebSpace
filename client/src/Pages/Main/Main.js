import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import { Auth } from "aws-amplify";
import API from "../../utils/API.js";
import "./main.css";
import UserCard from "../../components/UserCard/UserCard"
import ControlledCarousel from "../../components/Test"

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



    render() {
        return (
            <div>
                <UserCard results={this.state.users} />
                <ControlledCarousel



                />

            </div>

        )
    }
}

export default Main 