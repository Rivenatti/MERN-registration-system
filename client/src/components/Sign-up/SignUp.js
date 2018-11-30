import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Button, TextField } from "@material-ui/core/";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const styles = {
  paper: {
    marginTop: 20,
    marginBottom: 20,
    minHeight: "45rem",
    textAlign: "center",
    backgroundColor: "#ddd"
  },

  icon: {
    fontSize: "12rem"
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
  }
};

class SignUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="center"
        style={{ height: "100%" }}
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

            <form style={{ width: "90%", margin: "0 auto" }}>
              <TextField label="Name" margin="normal" fullWidth required />
              <TextField
                label="Organization"
                margin="normal"
                fullWidth
                required
              />
              <TextField label="Email" margin="normal" fullWidth required />
              <TextField label="Password" margin="normal" fullWidth required />
              <TextField
                label="Confirm password"
                margin="normal"
                fullWidth
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sign Up
              </Button>
            </form>
            <Button
              variant="contained"
              color="secondary"
              className={classes.signin}
            >
              Already registered
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SignUp);
