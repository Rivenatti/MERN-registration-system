// React
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

// Routes
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
    //---------------- Private route authentication (check if there is a token in the store)
    const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={props => {
            return this.props.token === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
      );
    };

    return (
      <Router>
        <>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/signout" component={SignOut} />
              <PrivateRoute exact path="/delete" component={Delete} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(App);
