// React
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setAuthorizationHeader from "../../utils/setAuthorizationHeader";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Button } from "@material-ui/core/";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

//---------------- Material UI custom styles

const styles = {
  paper: {
    marginTop: "2rem",
    marginBottom: "2rem",
    textAlign: "center",
    backgroundColor: "#ddd"
  },

  icon: {
    fontSize: "8rem"
  },

  title: {
    fontSize: "3rem",
    minHeight: "3rem"
  },

  bodyText: {
    minHeight: "15rem",
    fontSize: "1.4rem",
    padding: "0 1rem"
  },

  button: {
    marginTop: 20,
    width: "50%",
    height: "3rem",
    fontSize: "1.5rem",
    marginBottom: 20
  },

  link: {
    textDecoration: "none"
  }
};

//---------------- Class

class Landing extends Component {
  componentWillMount = () => {
    // On redirect, check if there is a token
    if (localStorage.token) {
      // Set authorization header
      setAuthorizationHeader(localStorage.token);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="center"
        style={{ minHeight: "calc(100vh - 64px - 28px)" }}
        alignItems="center"
      >
        <Grid item xs={11} sm={6} md={4} lg={3}>
          {/* ---------------- Paper with data */}

          <Paper className={classes.paper}>
            <AccountBoxIcon color="primary" className={classes.icon} />
            <Typography
              variant="title"
              align="center"
              className={classes.title}
              gutterBottom
            >
              Welcome!
            </Typography>
            <Typography
              variant="body1"
              align="left"
              className={classes.bodyText}
              gutterBottom
            >
              This is a fully working registration system.
              {<br />}
              {<br />}
              To test it, click 'sign in' button at the bottom, then in another
              window click 'create an account'.
              {<br />}
              {<br />}
              You can provide some fake data and later your account can be
              deleted.
              {<br />}
              {<br />}
              After successfull sign up, you can sign in with given email and
              password.
              {<br />}
              {<br />}
              On the profile page you can see details about your account and
              delete the account.
            </Typography>

            {/* ---------------- Conditional button rendering, check if user has the token */}

            {this.props.token ? (
              <Link to="/profile" className={classes.link}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Profile
                </Button>
              </Link>
            ) : (
              <Link to="/signin" className={classes.link}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Sign In
                </Button>
              </Link>
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Landing));
