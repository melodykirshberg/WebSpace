import React, { useReducer, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../Nav/Nav.js";
import Buttons from "../Button/Buttons.js";
import Form from "../../Form";
import { Hub, Auth } from "aws-amplify";
import { useStoreContext } from "../../utils/Store";
import './Authentication.modules.css';
import styles from "./style.module.css";

function Authentication(props) {
  console.log(props);
  const [formState, updateFormState] = useState("base");
  // TODO change userState -> state
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    // set listener for auth events
    Hub.listen("auth", data => {
      const { payload } = data;
      if (payload.event === "signIn") {
        setImmediate(() => dispatch({ type: "SET_USER", user: payload.data }));
        // TODO - Rework to use React Router instead of window object
        setImmediate(() => props.history.push("/register"));
        updateFormState("base");
      }
      // this listener is needed for form sign ups since the OAuth will redirect & reload
      if (payload.event === "signOut") {
        setTimeout(() => dispatch({ type: "SET_USER", user: null }), 350);
      }
    });
    // we check for the current user unless there is a redirect to ?signedIn=true
    if (!window.location.search.includes("?signedin=true")) {
      checkUser(dispatch);
    }
  }, []);

  // This renders the custom form
  if (formState === "email") {
    return (
      <div className={styles.container}>
        <Nav updateFormState={updateFormState} />
        <Form />
      </div>
    );
  }

  return (
    <div>
      <Nav updateFormState={updateFormState} />
      {state.loading && (
        <div className="body">
          <p>Loading...</p>
        </div>
      )}
      {!state.user && !state.loading && (
        <Buttons updateFormState={updateFormState} />
      )}
    </div>
  );
}

//CHECK USER FUNCTION
async function checkUser(dispatch) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user: ", user);
    dispatch({ type: "SET_USER", user });
  } catch (err) {
    console.log("err: ", err);
    dispatch({ type: "LOADED" });
  }
}

export default withRouter(Authentication);
