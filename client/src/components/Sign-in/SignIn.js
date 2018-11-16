import React, { Component } from "react";
import "../../styles/form.scss";

class SignIn extends Component {
  render() {
    return (
      <div className="form">
        <h2>SIGN IN</h2>
        <form>
          {/* INPUT ROW */}
          <div className="form__input">
            <input
              type="text"
              name="email"
              required
              onChange={this.onChange}
              autoComplete="off"
            />
            <label htmlFor="email">E-mail address</label>
            <span className="error" />
          </div>
          {/* INPUT ROW */}
          <div className="form__input">
            <input
              type="password"
              name="password"
              required
              onChange={this.onChange}
              autoComplete="off"
            />
            <label htmlFor="password">Password</label>
          </div>

          {/* SUBMIT */}
          <input type="submit" value="ENTER" />
        </form>
        <div className="registered">
          <a href="/sign-up">Create an account</a>
        </div>
      </div>
    );
  }
}

export default SignIn;
