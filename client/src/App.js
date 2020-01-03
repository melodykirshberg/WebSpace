import React from 'react';
import Home from "./Pages/Home/Home"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UserModal from "./components/Modal";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Home />
          {/* <Main /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
