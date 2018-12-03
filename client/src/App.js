import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import SignUp from "./components/Sign-up/SignUp";
import SignIn from "./components/Sign-in/SignIn";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/footer";
import SignOut from "./components/Sign-out/SignOut";
import Delete from "./components/Delete/Delete";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/signout" component={SignOut} />
              <Route exact path="/delete" component={Delete} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
