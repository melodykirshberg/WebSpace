import React, { useState, useReducer } from "react";
import { Auth } from "aws-amplify";
import "./Form.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "../components/RegisterForm/Error";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Must be a valid e-mail!")
    .max(255, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(255, "Too Long!")
    .required("Required")
});

const initialFormState = {
  username: "",
  password: "",
  email: "",
  confirmationCode: ""
};
function reducer(state, action) {
  switch (action.type) {
    case "updateFormState":
      return {
        ...state,
        [action.e.target.name]: action.e.target.value
      };
    default:
      return state;
  }
}
async function signUp({ username, password, email }, updateFormType) {
  try {
    await Auth.signUp({
      username,
      password,
      attributes: { email }
    });
    console.log("sign up success!");
    updateFormType("confirmSignUp");
  } catch (err) {
    console.log("error signing up..", err);
  }
}
async function confirmSignUp({ username, confirmationCode }, updateFormType) {
  try {
    await Auth.confirmSignUp(username, confirmationCode);
    console.log("confirm sign up success!");
    updateFormType("signIn");
  } catch (err) {
    console.log("error signing up..", err);
  }
}
async function signIn({ username, password }) {
  try {
    await Auth.signIn(username, password);
    console.log("sign in success!");
  } catch (err) {
    console.log("error signing up..", err);
  }
}
export default function Form(props) {
  const [formType, updateFormType] = useState("signUp");
  const [formState, updateFormState] = useReducer(reducer, initialFormState);
  function renderForm() {
    switch (formType) {
      case "signUp":
        return (
          <SignUp
            signUp={() => signUp(formState, updateFormType)}
            updateFormState={e =>
              updateFormState({ type: "updateFormState", e })
            }
          />
        );
      case "confirmSignUp":
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(formState, updateFormType)}
            updateFormState={e =>
              updateFormState({ type: "updateFormState", e })
            }
          />
        );
      case "signIn":
        return (
          <SignIn
            signIn={() => signIn(formState)}
            updateFormState={e =>
              updateFormState({ type: "updateFormState", e })
            }
          />
        );
      default:
        return null;
    }
  }
  return (
    <div className="">
      <div>{renderForm(formState)}</div>
      {formType === "signUp" && (
        <p className="have-acct ">
          Already have an account?
          <span
            className="signIn-link mx-1"
            onClick={() => updateFormType("signIn")}
          >
            Sign In
          </span>
        </p>
      )}

      {formType === "signIn" && (
        <p className="need-acct">
          Need an account?{" "}
          <span className="anchor" onClick={() => updateFormType("signUp")}>
            Sign Up
          </span>
        </p>
      )}
    </div>
  );
}

//SignUp form
//----- TODO  ---- ADD NOTIFICATIONS SO USER WILL KNOW ABOUT THE REQUIREMENTS..
// user name and email are a both mandatory and need to be same(can we change that?)
// user does not know if signs attemps are succesfull or not.
function SignUp(props) {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <div className="signUpContainer container">
            <h6 className="create-acct">Create an Account</h6>
            <input
              name="username"
              onChange={e => {
                e.persist();
                props.updateFormState(e);
              }}
              className="userNameInput"
              placeholder="username"
              id="username"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="errorStyle">{formik.errors.username}</div>
            ) : null}

            <input
              name="email"
              onChange={e => {
                e.persist();
                props.updateFormState(e);
              }}
              className=" emaiInput"
              placeholder="email"
              id="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="errorStyle">{formik.errors.email}</div>
            ) : null}

            <input
              type="password"
              name="password"
              onChange={e => {
                e.persist();
                props.updateFormState(e);
              }}
              className="passwordInput"
              placeholder="password"
              id="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="errorStyle">{formik.errors.password}</div>
            ) : null}

            <button onClick={props.signUp} className="signUpButton">
              Sign Up
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

//Sign in
// When user already has an account

function SignIn(props) {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <div className="container signInContainer">
            <h6 className="log-acct">Log In</h6>
            <input
              name="username"
              onChange={e => {
                e.persist();
                props.updateFormState(e);
              }}
              className="userNameInput"
              placeholder="username"
              id="username"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="errorStyle">{formik.errors.username}</div>
            ) : null}

            <input
              type="password"
              name="password"
              onChange={e => {
                e.persist();
                props.updateFormState(e);
              }}
              className="passwordInput"
              placeholder="password"
              id="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="errorStyle">{formik.errors.password}</div>
            ) : null}

            <button className="signInbutton" onClick={props.signIn}>
              Sign In
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

//this function handles the code that will be sent to user via email
// once user add
function ConfirmSignUp(props) {
  return (
    <div className="">
      <input
        name="confirmationCode"
        placeholder="Confirmation Code"
        onChange={e => {
          e.persist();
          props.updateFormState(e);
        }}
        className="confirmSignInput"
      />
      <button onClick={props.confirmSignUp} className="confirmSignInButton">
        Confirm Sign Up
      </button>
    </div>
  );
}
