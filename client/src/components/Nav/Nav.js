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
        <nav style={styles.navbar} onClick={() => props.updateFormState("base")}>
            <h1 style={styles.navTitle}>Web Space</h1>
            {state.user && state.user.signInUserSession && (
                <div>
                    <h4 style={styles.navGreet}>Welcome {state.user.signInUserSession.idToken.payload.name}</h4>
                    <button style={styles.navSignOut} onClick={signOut}>
                        <FaSignOutAlt color="grey" />
                        <p className="text">Sign Out</p>
                    </button>
                </div>
            )}
        </nav>
    );
}
const styles = {

    navbar: {
        fontSize: "24px",
        fontWeight: '400px',
        color: '#000000',
        backgroundColor: "ghostwhite",
        background: "#FFFFFF",
        boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.25)"
    },
    navTitle: {
        fontFamily: "Bodoni MT",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "43px",
        letterSpacing: "0.11em"
    },
    navGreet: {
        fontFamily: "Bodoni MT",
        fontWeight: "bold",
        fontSize: "26px",
        display: "flex",
        textAlign: "right",
        letterSpacing: "0.11em"
    },
    navSignOut: {
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #D6D5D5",
        mixBlendMode: "normal",
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "#999999"
    }
}

export default Nav;
