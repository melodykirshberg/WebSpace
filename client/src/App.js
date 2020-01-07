import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UserModal from "./components/Modal";
import Main from "./Pages/Main/Main.js";
// import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Authentication from "./components/Authentication/Authentication"
import React, { useReducer, useEffect, useState } from 'react';
import Nav from './components/Nav/Nav.js'
import Buttons from './components/Button/Buttons.js'
import Footer from './components/Footer/Footer'
import Form from './Form'
// import { Hub, Auth } from 'aws-amplify'
// import { FaSignOutAlt } from 'react-icons/fa'


function App() {


  return (
    <Router>
      <Authentication />
      <div className="App">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Main />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
