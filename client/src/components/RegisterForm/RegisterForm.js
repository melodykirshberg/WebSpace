import React, { useState, Component } from "react"
import Modal from 'react-bootstrap/Modal'
import "./register.css"
import API from "../../utils/API"
import { Formik } from "formik"
import * as Yup from "yup"
import Error from "./Error";



//here we have some schema for the validation we are usin YUP a npm package that does that for us. 
// We can change what it will be displayed to the usere!

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Must be a valid e-mail!")
    .max(255, "Too Long!")
    .required("Required"),
  bio: Yup.string()
    .min(2, "C'mon , we want to know more about you!")
    .max(255, "Too Long!")
    .required("Required"),


})

//this class has the form with the user profile when form it's submited 
//  it will send to our DB after pass the validation we set up above


class RegisterForm extends Component {




  render() {


    return (
      <div>

        <Formik
          initialValues={{ name: "", email: "", bio: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubtmitting }) => {
            const userEmail = values.email
            console.log(userEmail)
            ///update the user in the DB


            API.saveUser({
              name: values.name,
              website: values.website,
              company: values.company,
              bio: values.bio,
              email: values.email,
              motives: values.motives

            }).then(res => {
              this.props.handleModalClose();
              console.log("Saved to database")
            })
          }}


        >

          {({ values,
            errors,
            touched,
            handleChange,

            handleBlur,
            handleSubmit,
            isSubmitting }) => (

              <form onSubmit={handleSubmit}>
                <nav className=" modalNav  p-1">Your Profile</nav>

                <div className="container modalStyle">
                  <div className="row">

                    <div className="col-6">
                      <div className="row my-4 mx-5">

                        <img className="" src={require("./jen.png")} alt="userPicture" />

                      </div>

                      <div className="row my-1 mx-0 input-container ">
                        <div><label htmlFor="name">Name:</label></div>

                        <input type="text"
                          value={values.name}
                          name="name"
                          id="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={touched.name && errors.name ? "has-error" : null}
                        />
                        <div className=" row inputError">
                          <Error touched={touched.name} message={errors.name} />
                        </div>
                      </div>
                    </div>

                    <div className="col-6">

                      <div className="row   my-2 form-group">
                        <label htmlFor=""></label>
                        <textarea name="bio"
                          label="Select a color"
                          placeholder="Write a brief description about yourself..."
                          value={values.bio}
                          rows="4"
                          cols="45"
                          onChange={handleChange}
                          className={touched.bio && errors.bio ? "has-error" : null}

                        > </textarea>
                        <div className="inputError">
                          <Error touched={touched.bio} message={errors.bio} />
                        </div>
                      </div>

                      <div className="row form-group">
                        <label htmlFor="Email"> Email: </label>
                        <input
                          valu={values.email}
                          type="email"
                          name="email"
                          id="user_email"
                          onChange={handleChange}
                          className={touched.email && errors.email ? "has-error" : null}
                        />
                        <i className="fas fa-pen mx-2"></i>
                        <div className="inputError">
                          <Error touched={touched.email} message={errors.email} />
                        </div>


                      </div>
                      {/* 
                                            <div className="row form-group">
                                                <label htmlFor="website"> Website: </label>
                                                <input className=""
                                                    value={values.website}
                                                    type="text"
                                                    name="website"
                                                    id="user_website"
                                                    onChange={handleChange}
                                                />
                                                <i className="fas fa-pen mx-2"></i>
                                            </div> */}

                      <div className="row form-group">
                        <label htmlFor="company">Company:</label>
                        <input className="input-group-append"
                          value={this.company}
                          type="text"
                          name="company"
                          id="user_company"
                          onChange={handleChange}
                        />
                        <i className="fas fa-pen mx-2"></i>

                      </div>
                      <div className=" form-group">
                        {/* <label className="motivesLabel" htmlFor="motives">What brings you here today?</label> */}
                        <p className="motivesLabel">What brings you here today?</p>

                        <select onChange={handleChange}
                          onBlur={handleBlur}
                          className="custom-select col-8 form-select"
                          name="motives"
                          value={values.motives}
                          id="user_motive">

                          <option value="Networking">Networking</option>
                          <option value="Looking for a position">Looking for a position</option>
                          <option value="I am a recruiter">I am a recruiter</option>


                        </select>
                        <div className="  float-right">
                          <button className=" button submitBtn"
                            type="submit"

                            disabled={isSubmitting}
                          >



                            <i className="fas fa-check"></i>
                          </button>
                        </div>
                      </div>




                    </div>

                  </div>

                </div>
              </form>
            )}
        </Formik>



      </div >



    )
  }
}

export default RegisterForm