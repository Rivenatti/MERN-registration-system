import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { INPUT_CHANGED } from "../../actions/actions";
import Api from "../../api/signup";

import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
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
    marginTop: 0
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
              {/* USERNAME INPUT */}
              {this.props.errors.username ? (
                <FormControl
                  error
                  aria-describedby="component-error-text"
                  fullWidth
                >
                  <InputLabel htmlFor="component-error">Name</InputLabel>
                  <Input
                    id="component-error"
                    name="usernameInput"
                    value={this.props.usernameInput}
                    onChange={this.props.inputChanged}
                  />
                  <FormHelperText id="component-error-text">
                    Username must be 3 to 16 alphanumeric characters long.
                  </FormHelperText>
                </FormControl>
              ) : (
                <TextField
                  label="Username"
                  name="usernameInput"
                  value={this.props.usernameInput}
                  onChange={this.props.inputChanged}
                  margin="normal"
                  fullWidth
                  required
                />
              )}

              {/* ORGANIZATION INPUT */}
              {this.props.errors.organization ? (
                <FormControl
                  error
                  aria-describedby="component-error-text"
                  fullWidth
                >
                  <InputLabel htmlFor="component-error">
                    Organization
                  </InputLabel>
                  <Input
                    id="component-error"
                    name="organizationInput"
                    value={this.props.organizationInput}
                    onChange={this.props.inputChanged}
                  />
                  <FormHelperText id="component-error-text">
                    Organization must be 3 to 16 alphanumeric characters long.
                  </FormHelperText>
                </FormControl>
              ) : (
                <TextField
                  label="Organization"
                  name="organizationInput"
                  value={this.props.organizationInput}
                  onChange={this.props.inputChanged}
                  margin="normal"
                  fullWidth
                  required
                />
              )}

              {/* EMAIL INPUT */}
              {this.props.errors.email ? (
                <FormControl
                  error
                  aria-describedby="component-error-text"
                  fullWidth
                >
                  <InputLabel htmlFor="component-error">Email</InputLabel>
                  <Input
                    id="component-error"
                    name="emailInput"
                    value={this.props.emailInput}
                    onChange={this.props.inputChanged}
                  />
                  <FormHelperText id="component-error-text">
                    Email format invalid.
                  </FormHelperText>
                </FormControl>
              ) : (
                <TextField
                  label="Email"
                  name="emailInput"
                  value={this.props.emailInput}
                  onChange={this.props.inputChanged}
                  margin="normal"
                  fullWidth
                  required
                />
              )}

              {/* PASSWORD INPUT */}
              {this.props.errors.password ? (
                <FormControl
                  error
                  aria-describedby="component-error-text"
                  fullWidth
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
                    Minimum four characters, at least one letter and one number
                  </FormHelperText>
                </FormControl>
              ) : (
                <TextField
                  label="Password"
                  name="passwordInput"
                  value={this.props.passwordInput}
                  onChange={this.props.inputChanged}
                  type="password"
                  margin="normal"
                  fullWidth
                  required
                />
              )}

              {/* CONFIRM PASSWORD INPUT */}
              {this.props.confirmPasswordInput !== this.props.passwordInput ? (
                <FormControl
                  error
                  aria-describedby="component-error-text"
                  fullWidth
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
                    Passwords must match.
                  </FormHelperText>
                </FormControl>
              ) : (
                <TextField
                  label="Confirm password"
                  name="confirmPasswordInput"
                  value={this.props.confirmPasswordInput}
                  onChange={this.props.inputChanged}
                  type="password"
                  margin="normal"
                  fullWidth
                  required
                />
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sign Up
              </Button>
            </form>
            <Link to="/signin" className={classes.link}>
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
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignUp));
