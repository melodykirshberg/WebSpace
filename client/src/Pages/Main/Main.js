import React, { Component } from "react";
import NavBarMain from "../../components/NavBarMain";
import MainComponent from "../../components/MainComponent";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import UserModal from "../../components/UserModal"
import API from "../../utils/API";


// when page loads, I want to load all users in the database and pass as props until it gets to the modal
class Main extends Component {

    // Setting the component's initial state

    state = {
        users: []
    }


    // this is the initialization, what do you want the page to display when page it's first loaded When page it's loaded go make an API call to our DB and get all USERS
    componentDidMount() {
        API.getUsers().then(res => this.setState({
            users: res.data.results
        })).catch(err => console.log(err))
    }



    render() {
        return (
            <span>
                <NavBarMain />
                {/* <Wrapper>  */}
                <UserModal />
                {/* <MainComponent /> */} */}
                {/* </Wrapper> */}

      </span>

    )
  }
}

export default Main 