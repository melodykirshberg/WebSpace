import React, { Component } from "react";
import DataArea from "./DataArea";
import API from "../utils/API";

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            search: ""
        }
    }

    componentDidMount() {
        API.getUsers().then(response => {
            this.setState({
                users: response.data.results
            })
        });
    }

    handleSearch = event => {
        const value = event.target.value;
        this.setState({search: value});
    }

    filterUsers = () => {
        if(!this.state.search) return this.state.users;
        
        const regex = new RegExp(this.state.search.toLowerCase(), "g");
        const users = this.state.users.filter(user => {
            const username = (user.name.first + " " + user.name.last).toLowerCase();
            return regex.test(username)
        });
        return users;
    }

    render() {
        return (
            <>
                <DataArea search={this.state.search} handleSearch={this.handleSearch} users={this.filterUsers()} />
            </>
        );
    }
};