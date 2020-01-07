import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UserModal from "./components/Modal";
import Main from "./Pages/Main/Main.js";
import Register from "./Pages/Register/Register";
import Authentication from "./components/Authentication/Authentication";
import React from 'react';
import Nav from './components/Nav/Nav.js';
import Buttons from './components/Button/Buttons.js';
import Footer from './components/Footer/Footer';
import Form from './Form';



function App() {


  return (
    <Router>
      <Authentication />
      <div className="App">
        <Switch>
          {/* <Route exact path="/register" component={Register} />
          <Main /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
