import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import Api from "../../api/delete";

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
  state = {
    userId: "",
    username: "",
    organization: "",
    email: "",
    created: ""
  };

  // Set state with decoded JWT token data
  componentWillMount = () => {
    // Decode user information
    const decoded = jwt_decode(localStorage.token);
    console.log(decoded);
    const { userId, username, email, organization } = decoded;
    const created = decoded.created.split("T")[0];

    this.setState({
      userId,
      username,
      email,
      organization,
      created
    });
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
              ID: {this.state.userId}
              <br />
              Username: {this.state.username}
              <br />
              Organization: {this.state.organization}
              <br />
              Email: {this.state.email}
              <br />
              Created: {this.state.created}
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() =>
                this.props.handleClick(this.state.userId, this.props.history)
              }
            >
              Delete account
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = _dispatch => {
  return {
    handleClick: (_userId, _history) => {
      Api.deleteUser(_dispatch, _userId, _history);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Profile));
