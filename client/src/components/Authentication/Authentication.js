import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../Nav/Nav.js";
import Buttons from "../Button/Buttons.js";
import Form from "../../Form";
import { Hub, Auth } from "aws-amplify";
import { useStoreContext } from "../../utils/Store";
import API from "../../utils/API";
import styles from "./style.module.css";

function Authentication(props) {
  console.log(props);
  const [formState, updateFormState] = useState("base");
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    // set listener for auth events
    Hub.listen("auth", data => {
      const { payload } = data;
      if (payload.event === "signIn") {
        Auth.currentAuthenticatedUser()
          .then(data => {
            const userName = data.attributes.name
            const userEmail = data.attributes.email
            const userImage = data.attributes.picture
            API.getUserByEmail(userEmail).then(userExist => {
              //checks if user is in the data base and stores information that will be passed to the modal
              if (!userExist.data) {
                API.saveUser({
                  name: userName,
                  email: userEmail,
                  picture: userImage
                }).then(user => {
                  console.log("User Created");
                }).catch(err => {
                  console.log("User creation failed");
                });
                props.history.push("/register");

              }
            })
          })

        setImmediate(() => dispatch({ type: "SET_USER", user: payload.data }));
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
