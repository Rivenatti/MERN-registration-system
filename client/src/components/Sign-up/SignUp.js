import React, { Component } from "react";
import "../../styles/form.scss";

class SignUp extends Component {
  render() {
    return (
      <div className="form">
        <h2>SIGN UP</h2>
        <form onSubmit={this.onSubmit}>
          {/* USERNAME INPUT ROW */}
          <div className="form__input">
            <input
              type="text"
              name="username"
              required
              onChange={this.onChange}
              autoComplete="off"
            />
            <label htmlFor="username">Username</label>
            <span className="error" />
          </div>

          {/* EMAIL INPUT ROW */}
          <div className="form__input mt-20">
            <input
              type="text"
              name="email"
              required
              onChange={this.onChange}
              autoComplete="off"
            />
            <label htmlFor="email">Email</label>
            <span className="error" />
          </div>
          {/* PASSWORD INPUT ROW */}
          <div className="form__input mt-20">
            <input
              type="password"
              name="password"
              required
              onChange={this.onChange}
              autoComplete="off"
            />
            <label htmlFor="password">Password</label>
            <span className="error" />
          </div>
          {/* CONFIRM PASSWORD INPUT ROW */}
          <div className="form__input mt-20">
            <input
              type="password"
              name="confirmPassword"
              required
              onChange={this.onChange}
              autoComplete="off"
            />
            <label htmlFor="confirmPassword">Confirm password</label>
            <span className="error" />
          </div>
          {/* AGREEMENT INPUT ROW */}
          <div className="form__input__agreement">
            <input type="checkbox" name="agreement" id="agreement" required />
            <label htmlFor="agreement">
              I agree all statements in <span>terms of service</span>
            </label>
          </div>
          {/* SUBMIT */}
          <input type="submit" value="JOIN" />
        </form>
        <div className="registered">
          <a href="/">Already registered</a>
        </div>
      </div>
    );
  }
}

export default SignUp;
