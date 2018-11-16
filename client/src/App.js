import React, { Component } from "react";
import Navbar from "./components/Navbar/navbar";
// import SignIn from "./components/Sign-in/SignIn";
import SignIn from "./components/Sign-up/SignUp";
import Footer from "./components/Footer/footer";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Navbar />
          <SignIn />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
