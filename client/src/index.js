import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import "./index.css";
Amplify.configure(config);

ReactDOM.render(<App />, document.getElementById("root"));
