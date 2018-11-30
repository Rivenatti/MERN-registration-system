import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Button } from "@material-ui/core/";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

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
  }
};

class Profile extends Component {
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
          <Paper className={classes.paper}>
            <AccountBoxIcon color="primary" className={classes.icon} />
            <Typography
              variant="title"
              align="center"
              className={classes.title}
              gutterBottom
            >
              Profile
            </Typography>

            <Typography
              variant="body1"
              align="left"
              className={classes.bodyText}
              gutterBottom
            >
              Your details:
              {<br />}
              {<br />} user: tester
              {<br />} password: pass123
              {<br />}
              {<br />}
              You can always delete your account.
            </Typography>

            <Link to="/delete/:id">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Delete account
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Profile);
