
import React from "react"
import { Auth } from "aws-amplify";
import "./Nav.css"

function signOut() {
    Auth.signOut()
        .then(data => {
            console.log("signed out: ", data);
        })
        .catch(err => console.log(err));
}




function SignOutBttn() {

    return (

        <button className="btn  navSignOut"
            onClick={signOut}>Sign Out</button>
    )



}
export default SignOutBttn
