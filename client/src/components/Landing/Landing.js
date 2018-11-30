import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Button } from "@material-ui/core/";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const styles = {
  paper: {
    marginTop: 20,
    marginBottom: 20,
    minHeight: "35rem",
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
  }
};

class SignUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Grid item xs={11} sm={6} md={4} lg={3}>
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
              This is a simple registration system. You can test it by signing
              in as:
              {<br />}
              {<br />} user: tester
              {<br />} password: pass123
              {<br />}
              {<br />}
              Or by signing up. You can always delete your account on the
              profile page.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Sign In
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignUp);
