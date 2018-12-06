// React
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  INPUT_CHANGED,
  ROUTE_CHANGED,
  SNACKBAR_CLOSE
} from "../../actions/actions";
import Api from "../../api/signin";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Snackbar,
  SnackbarContent,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  IconButton
} from "@material-ui/core/";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";

//---------------- Material UI custom styles

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

  form: {
    width: "90%",
    margin: "0 auto"
  },

  button: {
    marginTop: 20,
    width: "50%",
    height: "3.5rem",
    fontSize: "1.5rem"
  },

  create: {
    marginTop: 20,
    width: "60%",
    fontSize: "0.7rem",
    marginBottom: 20
  },

  link: {
    textDecoration: "none"
  },

  snakbar: {
    backgroundColor: "#d32f2f"
  },
  message: {
    display: "flex",
    alignItems: "center"
  },

  errorIcon: {
    marginRight: "1rem"
  }
};

class SignIn extends Component {
  state = {
    open: true
  };

  handleSnackbarClose = () => {
    this.setState({ open: !this.state.open });
  };

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
            {/* IF AUTHENTICATION FAILS, SHOW ALERT */}

            {this.props.signInAuthFailed === false ? null : (
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                open={this.state.open}
                autoHideDuration={5000}
                onClose={this.props.handleSnackbarClose}
              >
                <SnackbarContent
                  className={classes.snakbar}
                  aria-describedby="client-snackbar"
                  message={
                    <span id="client-snackbar" className={classes.message}>
                      <ErrorIcon className={classes.errorIcon} />
                      Authentication failed
                    </span>
                  }
                  action={[
                    <IconButton
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      className={classes.close}
                      onClick={this.props.handleSnackbarClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  ]}
                />
              </Snackbar>
            )}

            {/* DEFAULT ACCOUNT ICON */}

            <AccountBoxIcon color="primary" className={classes.icon} />

            {/* HEADING */}

            <Typography
              variant="title"
              align="center"
              gutterBottom
              style={{ fontSize: "2.5rem" }}
            >
              SIGN IN
            </Typography>

            {/* FORM */}

            <form
              className={classes.form}
              onSubmit={e =>
                this.props.handleSubmit(
                  e,
                  this.props.emailInput,
                  this.props.passwordInput,
                  this.props.history
                )
              }
            >
              {/*  EMAIL INPUT  */}

              <FormControl
                error={this.props.errors.email}
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
                  {this.props.errors.email ? "Invalid email format." : null}
                </FormHelperText>
              </FormControl>

              {/* PASSWORD INPUT */}

              <TextField
                label="Password"
                name="passwordInput"
                value={this.props.password}
                onChange={this.props.inputChanged}
                type="password"
                margin="normal"
                fullWidth
                required
              />

              {/* SIGN IN BUTTON */}

              <Button
                disabled={
                  this.props.errors === false ||
                  this.props.emailInput === "" ||
                  this.props.errors.email ||
                  this.props.passwordInput === ""
                }
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sign In
              </Button>
            </form>
            <Link
              to="/signup"
              className={classes.link}
              onClick={this.props.handleRouteChanged}
            >
              {/* CREAE ACCOUNT BUTTON */}

              <Button
                variant="contained"
                color="secondary"
                className={classes.create}
              >
                Create an account
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
    emailInput: state.emailInput,
    passwordInput: state.passwordInput,
    errors: state.errors,
    signInAuthFailed: state.signInAuthFailed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputChanged: e => {
      dispatch({
        type: INPUT_CHANGED,
        name: e.target.name,
        value: e.target.value
      });
    },
    handleSubmit: (e, _email, _password, _history) => {
      e.preventDefault();
      Api.signIn(dispatch, _email, _password, _history);
    },
    handleRouteChanged: e => {
      dispatch({ type: ROUTE_CHANGED });
    },
    handleSnackbarClose: e => {
      dispatch({ type: SNACKBAR_CLOSE });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignIn));
