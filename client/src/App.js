import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import Landing from "./components/Landing/Landing";
import SignUp from "./components/Sign-up/SignUp";
import SignIn from "./components/Sign-in/SignIn";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Navbar />
          <Landing />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
