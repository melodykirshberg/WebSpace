import React, { Component } from "react";
import NavBarMain from "../../components/NavBarMain";
import MainComponent from "../../components/MainComponent";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import UserModal from "../../components/UserModal"


class Main extends Component {

    render() {
        return (
            <span>
                {/* <NavBarMain />
                <Wrapper> */}
                <UserModal />
                <MainComponent />
                {/* </Wrapper> */}
                <div className="container">


                </div>
            </span>

        )
    }
}

export default Main