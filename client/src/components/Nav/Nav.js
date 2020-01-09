import React from "react";
import "./Nav.css";
import SignOutBttn from "../Nav/SignOut";
import { useStoreContext } from "../../utils/Store";

function Nav(props) {
  const [state, dispatch] = useStoreContext();

  return (
    <nav className="navBar" onClick={() => props.updateFormState("base")}>
      <div className="container">
        <div className="row">
          <div className="col ">
            <h1 className=" my-1 navTitle col" href="#">
              Web Space
            </h1>
          </div>

          {state.user && state.user.signInUserSession && (
            <div>
              <SignOutBttn />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Nav;
