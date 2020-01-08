import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UserModal from "./components/Modal";
import Main from "./Pages/Main/Main.js";
import Register from "./Pages/Register/Register";
import Authentication from "./components/Authentication/Authentication";
import React from "react";
// import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer";
import { StoreProvider } from "./utils/Store"


function App() {
  return (
    <StoreProvider>
      <Router>
        <Authentication />
        <div className="App">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/main" component={Main} />
          </Switch>
        </div>
      </Router>
          <Footer />
    </StoreProvider>
  );
}
export default App;
