import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UserModal from "./components/Modal";
import Main from "./Pages/Main/Main.js";
// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";

import React, {useReducer, useEffect, useState } from 'react';
import Nav from './components/Nav/Nav.js'
// import Buttons from './Buttons'
import Footer from './components/Footer/Footer.js'
// import Form from './Form'
// import { Hub, Auth } from 'aws-amplify'
// import { FaSignOutAlt } from 'react-icons/fa'


function App() {


  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route exact path="/login" component={Login} /> */}
          <Main />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
