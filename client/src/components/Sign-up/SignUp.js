import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { INPUT_CHANGED, ROUTE_CHANGED } from "../../actions/actions";
import Api from "../../api/signup";

import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core/";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const styles = {
  container: {
    minHeight: "calc(100vh - 64px - 28px)"
  },
  paper: {
    marginTop: "2rem",
    marginBottom: "2rem",
    textAlign: "center",
    backgroundColor: "#ddd"
  },

  icon: {
    fontSize: "12rem"
  },

  resize: {
    marginTop: 10
  },

  form: {
    width: "95%",
    margin: "0 auto"
  },

  button: {
    marginTop: 20,
    width: "50%",
    height: "3.5rem",
    fontSize: "1.5rem"
  },

  signin: {
    marginTop: 20,
    width: "60%",
    fontSize: "0.7rem",
    marginBottom: 20
  },

  link: {
    textDecoration: "none"
  }
};

class SignUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="center"
        className={classes.container}
        alignItems="center"
      >
        <Grid item xs={11} sm={6} md={4} lg={3}>
          <Paper className={classes.paper}>
            <AccountBoxIcon color="primary" className={classes.icon} />

            <Typography
              variant="title"
              align="center"
              gutterBottom
              style={{ fontSize: "2.5rem" }}
            >
              SIGN UP
            </Typography>

            <form
              className={classes.form}
              onSubmit={e =>
                this.props.handleSubmit(
                  e,
                  this.props.usernameInput,
                  this.props.organizationInput,
                  this.props.emailInput,
                  this.props.passwordInput,
                  this.props.history
                )
              }
            >
              {/* -------------------- USERNAME INPUT --------------------*/}
              <FormControl
                error={
                  this.props.errors.username || this.props.errors.usernameExists
                }
                aria-describedby="component-error-text"
                fullWidth
                className={classes.resize}
                required
              >
                <InputLabel htmlFor="component-error">Username</InputLabel>
                <Input
                  id="component-error"
                  name="usernameInput"
                  value={this.props.usernameInput}
                  onChange={this.props.inputChanged}
                />
                <FormHelperText id="component-error-text">
                  {this.props.errors.usernameExists
                    ? "Given username already exists."
                    : this.props.errors.username
                    ? "Username must be 3 to 16 alphanumeric characters long."
                    : null}
                </FormHelperText>
              </FormControl>
              {/* -------------------- ORGANIZATION INPUT -------------------- */}
              <FormControl
                error={this.props.errors.organization}
                aria-describedby="component-error-text"
                fullWidth
                className={classes.resize}
                required
              >
                <InputLabel htmlFor="component-error">Organization</InputLabel>
                <Input
                  id="component-error"
                  name="organizationInput"
                  value={this.props.organizationInput}
                  onChange={this.props.inputChanged}
                />
                <FormHelperText id="component-error-text">
                  {this.props.errors.organization
                    ? "Organization must be 3 to 16 alphanumeric characters long."
                    : null}
                </FormHelperText>
              </FormControl>
              {/* -------------------- EMAIL INPUT -------------------- */}
              <FormControl
                error={this.props.errors.email || this.props.errors.emailExists}
                aria-describedby="component-error-text"
                fullWidth
                className={classes.resize}
                required
              >
                <InputLabel htmlFor="component-error">Email</InputLabel>
                <Input
                  id="component-error"
                  name="emailInput"
                  value={this.props.emailInput}
                  onChange={this.props.inputChanged}
                />
                <FormHelperText id="component-error-text">
                  {this.props.errors.emailExists
                    ? "Given email already exists."
                    : this.props.errors.email
                    ? "Invalid email format."
                    : null}
                </FormHelperText>
              </FormControl>
              {/* -------------------- PASSWORD INPUT -------------------- */}
              <FormControl
                error={this.props.errors.password}
                aria-describedby="component-error-text"
                fullWidth
                className={classes.resize}
                required
              >
                <InputLabel htmlFor="component-error">Password</InputLabel>
                <Input
                  id="component-error"
                  name="passwordInput"
                  type="password"
                  value={this.props.passwordInput}
                  onChange={this.props.inputChanged}
                />
                <FormHelperText id="component-error-text">
                  {this.props.errors.password
                    ? "Minimum four characters, at least one: upper case letter, lower case letter, digit and special character."
                    : null}
                </FormHelperText>
              </FormControl>
              {/* -------------------- CONFIRM PASSWORD INPUT -------------------- */}

              <FormControl
                error={this.props.errors.confirmPassword}
                aria-describedby="component-error-text"
                fullWidth
                className={classes.resize}
                required
              >
                <InputLabel htmlFor="component-error">
                  Confirm password
                </InputLabel>
                <Input
                  id="component-error"
                  name="confirmPasswordInput"
                  type="password"
                  value={this.props.confirmPasswordInput}
                  onChange={this.props.inputChanged}
                />
                <FormHelperText id="component-error-text">
                  {this.props.errors.confimPassword
                    ? "Passwords must match."
                    : null}
                </FormHelperText>
              </FormControl>
              {/* -------------------- SIGN UP BUTTON -------------------- */}
              <Button
                disabled={
                  this.props.errors === false ||
                  this.props.usernameInput === "" ||
                  this.props.errors.usernameExists ||
                  this.props.errors.username ||
                  this.props.organizationInput === "" ||
                  this.props.errors.organization ||
                  this.props.emailInput === "" ||
                  this.props.errors.email ||
                  this.props.errors.emailExists ||
                  this.props.passwordInput === "" ||
                  this.props.errors.password ||
                  this.props.confirmPasswordInput === "" ||
                  this.props.errors.confirmPassword
                }
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sign Up
              </Button>
            </form>
            <Link
              to="/signin"
              className={classes.link}
              onClick={this.props.handleRouteChanged}
            >
              <Button
                variant="contained"
                color="secondary"
                className={classes.signin}
              >
                Already registered
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    usernameInput: state.usernameInput,
    organizationInput: state.organizationInput,
    emailInput: state.emailInput,
    passwordInput: state.passwordInput,
    confirmPasswordInput: state.confirmPasswordInput,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputChanged: e => {
      const action = {
        type: INPUT_CHANGED,
        name: e.target.name,
        value: e.target.value
      };
      dispatch(action);
    },
    handleSubmit: (
      e,
      _username,
      _organization,
      _email,
      _password,
      _history
    ) => {
      e.preventDefault();
      Api.signUp(
        dispatch,
        _username,
        _organization,
        _email,
        _password,
        _history
      );
    },
    handleRouteChanged: e => {
      dispatch({ type: ROUTE_CHANGED });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignUp));
