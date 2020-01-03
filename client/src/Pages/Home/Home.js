import React, { useState } from "react"
import Login from "../Login/Login"
import "./home.css"
import GoogleBtnSignIn from "../../components/Authentication/SignIn"
import Amplify, { Auth } from 'aws-amplify';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

//When page loads set Usersignedin to false. If user it's signed in and authenticated, redirect to main page.

// this page has two buttons one for sign in with google and the other to register 

function Home() {

    const [user, setUser] = useState([])


    return (

            <span>
                <nav className="appNav ">

                </nav>

                <div className="container">

                    <div className="row">
                        <div className="col">
                            <div className="card card-sign">

                                <div className="card-body">
                                    <div className="container card-container">
                                        <div className="row">
                                            <div className="col">
                                                <h3 className="card-title app-title">Web Space</h3>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">

                                                <p className="app-description">Get to know better the people you are about to network with.</p>
                                            </div>

                                        </div>
                                        <div className="row text-center buttonRow">
                                            <div className="col-12">
                                                <GoogleBtnSignIn />

                                            </div>
                                            <div className="col-12">
                                                <Link to='/register' className="btn button signInBtn" >
                                                    Create an Account
                                                    </Link>
                                            </div>
                                            <div className="col-12">


                                                <small>Already have an account?
                                                    <Link to='/login' >
                                                        Log in!
                                                    </Link>  </small>


                                            </div>


                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </span >
    )

}

export default Home