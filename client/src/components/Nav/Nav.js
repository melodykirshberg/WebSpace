import React, { Component, useState, useReducer } from "react";
import { Auth } from "aws-amplify";
import { FaSignOutAlt } from "react-icons/fa";
import "./Nav.css";

import { useStoreContext } from "../../utils/Store";

function signOut() {
    Auth.signOut()
        .then(data => {
            console.log("signed out: ", data);
        })
        .catch(err => console.log(err));
}

function Nav(props) {
    const [state, dispatch] = useStoreContext();
    return (
        <nav className="nav" onClick={() => props.updateFormState("base")}>
            WebSpace
      {state.user && state.user.signInUserSession && (
                <div>
                    <h4>Welcome {state.user.signInUserSession.idToken.payload.name}</h4>
                    <button className="signOut" onClick={signOut}>
                        <FaSignOutAlt color="white" />
                        <p className="text">Sign Out</p>
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Nav;
