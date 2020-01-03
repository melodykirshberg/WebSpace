import React from 'react';
import Home from "./Pages/Home/Home"
import Footer from "./components/Footer"
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main"
// import UserModal from "./components/Modal"

=======
import Main from "./Pages/Main/Main"
>>>>>>> 52360d44ccd72fcb9b7446f5487953af5e66ba92


function App() {

  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
        <Switch>
          <Home />
          <Main />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
=======

    <div className="App">

      <Home /> />
      {/* <Main /> */}

      <Footer />
    </div>

>>>>>>> 52360d44ccd72fcb9b7446f5487953af5e66ba92
  );
}

export default App;
