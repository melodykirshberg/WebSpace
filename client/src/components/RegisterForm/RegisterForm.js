import React from "react"
import Modal from 'react-bootstrap/Modal'
import FormErrors from "../FormErrors"






function RegisterForm(props) {

    return (
        <span>
            <Modal.Body>
                <nav className=" modalNav my-0 p-2"> We want to know more about you!</nav>

                <div className="container modalStyle">
                    <div className="row">

                        <div className="col-6">
                            <div className="row my-5 mx-2">
                                <img className="userImage" src={require("./jen.png")} alt="userPicture" />

                            </div>
                            <div className="row my-1 mx-1  input-container ">

                                {/* <label htmlFor="name">Name:</label> */}
                                <input type="text"
                                    value={props.nAme}
                                    type="text"
                                    name="name"
                                    id="userName"
                                    onChange={props.handleInputChange}
                                    className="input-field"
                                />
                                <i className="fas fa-pen mx-2"></i>
                            </div>
                        </div>

                        <div className="col-6">

                            <div className="row my-2 form-group">
                                <label htmlFor=""></label>
                                <textarea name="bio"
                                    className=" bioBox"
                                    value={props.bio}
                                    rows="4"
                                    cols="45"
                                    onChange={props.handleInputChange}> </textarea>
                            </div>

                            <div className="row form-group">
                                <label htmlFor="Email"> Email: </label>
                                <input
                                    value={props.email}
                                    type="email"
                                    name="email"
                                    id="user_email"
                                    onChange={props.handleInputChange}
                                    required />
                                <i className="fas fa-pen mx-2"></i>
                            </div>

                            <div className="row form-group">
                                <label htmlFor="website"> Website: </label>
                                <input className=""
                                    value={props.website}
                                    type="url"
                                    name="website"
                                    id="user_website"
                                    onChange={props.handleInputChange} />
                                <i className="fas fa-pen mx-2"></i>
                            </div>

                            <div className="row form-group">
                                <label htmlFor="company">Company:</label>
                                <input className="input-group-append"
                                    value={props.company}
                                    type="text"
                                    name="company"
                                    id="user_company"
                                    onChange={props.handleInputChange} />
                                <i className="fas fa-pen mx-2"></i>
                            </div>
                            <div className="row form-group">
                                {/* <label className="motivesLabel" htmlFor="motives">What brings you here today?</label> */}
                                <p className="motivesLabel">What brings you here today?</p>

                                <select onChange={props.handleInputChange}
                                    className="custom-select col-8 form-select"
                                    name="motives"
                                    value={props.selectedOption}
                                    id="user_motive">

                                    <option value="Networking">Networking</option>
                                    <option value="Looking for a position">Looking for a position</option>
                                    <option value="I am a recruiter">I am a recruiter</option>


                                </select>
                            </div>

                            <div className="col- float-right">
                                <button className=" button submitBtn" type="submit"

                                    onClick={props.handleSubmit} >
                                    <i className="fas fa-check"></i>
                                </button>
                            </div>


                        </div>

                    </div>

                </div>


            </Modal.Body>

        </span >



    )
}

export default RegisterForm