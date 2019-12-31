import React from 'react';
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {


  return (
    <Router>
      <div className="App">


        {/* <Home /> */}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
