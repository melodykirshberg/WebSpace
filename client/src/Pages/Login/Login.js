import React, { Component } from "react"
import "./login.css"

class Login extends Component {


  render() {

    return (


      <span>
        <nav className="blueNav ">


        </nav>

        <div className="container">

          <div className="row">
            <div className="col">
              <div className="card card-sign">

                <div className="card-body">
                  <div className="container card-container">
                    <div className="row">
                      <div className="col">
                        <h3 className="card-title app-title">Welcome Back</h3>

                      </div>
                    </div>
                    <div className="row">


                    </div>
                    <div className="row text-center inputRow">
                      <div className="col-12">
                        email : <input className="inputField " type=" text" />
                        password: <input className="inputField input" type="text" />

                      </div>
                      <div className="col-12">

                      </div>
                      <div className="col-12">

                        <small>
                          Forgot password?
                        </small>
                      </div>
                      <div className="col-12">
                        <button className="button btn login-btn">Login</button>
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
}

export default Login