import React, { Component } from "react";
import "./Delete.scss";
import { USER_DELETED } from "../../actions/actions";
import { connect } from "react-redux";

// Delete component which after 5 seconds removes token from the browser and redirects user to the home page

class Delete extends Component {
  //------------ SET TIME HERE ------------
  state = {
    counter: 3
  };

  componentDidMount = () => {
    const intervalId = setInterval(this.countdown, 1000);
    this.setState({ intervalId });
  };

  componentWillUnmount = () => {
    localStorage.removeItem("token");
    return this.props.onDelete();
  };

  countdown = () => this.setState({ counter: this.state.counter - 1 });

  render() {
    const { counter } = this.state;
    return (
      <div className="SignOut">
        <div className="container">
          <p>
            <br />
            <code>
              Account has been deleted.
              <br />
              <br />
              <br />
            </code>
            Redirecting to homepage in {counter} seconds
          </p>
          <div className="dot dot1" />
          <div className="dot dot2" />
          <div className="dot dot3" />
          {counter === 0 && this.props.history.push("/")}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: () => {
      dispatch({ type: USER_DELETED });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Delete);
