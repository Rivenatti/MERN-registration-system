// React
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SIGNED_OUT } from "../../actions/actions";
import { connect } from "react-redux";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

//---------------- Material UI custom styles

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },

  link: {
    color: "inherit",
    textDecoration: "none"
  }
};

class Navbar extends Component {
  // Material UI conditional menu (after sign in)
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              <Link to="/" className={classes.link}>
                App
              </Link>
            </Typography>

            {this.props.token && (
              // CHECK IF USER HAS TOKEN
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  {/* PROFILE LINK */}
                  <MenuItem onClick={this.handleClose}>
                    <Link to="/profile" className={classes.link}>
                      Profile
                    </Link>
                  </MenuItem>
                  {/* SIGN OUT LINK */}
                  <MenuItem onClick={this.handleClose}>
                    <Link
                      to="/signout"
                      className={classes.link}
                      onClick={this.props.onSubmit}
                    >
                      Sign out
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      dispatch({ type: SIGNED_OUT });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Navbar));
