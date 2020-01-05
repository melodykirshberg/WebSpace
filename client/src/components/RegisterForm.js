import React from "react"
import Modal from 'react-bootstrap/Modal'





function RegisterForm(props) {

    return (

        <Modal.Body className=" modalBackground modalDesign">

            <div className="container">

                <div className="row">

                    <div className="col-6">

                        <div className="row">
                            <img src={require('./pic.jpg')}></img>
                        </div>

                        <div className="row">
                            Name <input
                                type="text"
                                name="name"
                                id="user_name"
                                value={props.name}
                                onChange={props.handleInputChange} />

                        </div>

                    </div>


                    <div className="col-6">
                        <div className="row form-group">
                            <label htmlFor="">Bio</label>

                            <textarea name="bio"
                                className="form-control"
                                value={props.bio} rows="4"
                                cols="45"
                                onChange={props.handleInputChange}>.. </textarea>
                        </div>

                        <div className="row">
                            Email: <input className="col-6"
                                value={props.email}
                                type="email"
                                name="email"
                                id="user_email"
                                onChange={props.handleInputChange} />
                        </div>

                        <div className="row">
                            Website:<input className="col-6"
                                value={props.website}
                                type="url"
                                name="website"
                                id="user_website"
                                onChange={props.handleInputChange} />
                        </div>


                        <div className="row">
                            Company:<input className="col-6"
                                value={props.company}
                                type="text"
                                name="company"
                                id="user_company"
                                onChange={props.handleInputChange} />
                        </div>

                        <div className="row">

                            <select onChange={props.handleInputChange} className="custom-select col-8" name="motives" value={props.motives} id="user_motive">
                                {/* <option selected>{props}</option> */}
                                <option value="Networking">Networking</option>
                                <option value="Position">Looking for a position</option>
                                <option value="Recruiter">I am a recruiter</option>

                            </select>
                        </div>



                    </div>





                </div>
                <div className="row">
                    <button type="submit" onClick={props.handleSubmit} >Save</button>

                </div>
            </div>
        </Modal.Body>

    )
}

export default RegisterForm