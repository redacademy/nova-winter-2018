import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Login from "./Login";

import {
  setEmailState,
  setPasswordState,
  login,
  logOut
} from "../../redux/modules/auth";
import { colors, typography } from "../../config/styles.js";
const { tintBlack } = colors;
const { fontMain } = typography;

class LoginContainer extends Component {
  _handleChangeEmail = value => {
    this.props.dispatch(setEmailState(value));
  };

  _handleChangePassword = value => {
    this.props.dispatch(setPasswordState(value));
  };

  _handleSubmit = ({ email, password }) => {
    if (this.props.email && this.props.password) {
      this.props.dispatch(login({ email, password }));
    }
  };
  _logOut = () => {
    this.props.dispatch(logOut());
  };

  static route = {
    navigationBar: {
      title: "Login",
      backgroundColor: tintBlack,
      titleStyle: {
        color: "#ffffff",
        fontFamily: fontMain
      }
    }
  };

  render() {
    return (
      <Login
        handleChangeEmail={this._handleChangeEmail}
        handleChangePassword={this._handleChangePassword}
        handleSubmit={this._handleSubmit}
        logOut={this._logOut}
        password={this.props.password}
        email={this.props.email}
        currentUser={this.props.currentUser}
      />
    );
  }
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.string,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

LoginContainer.defaultProps = {
  currentUser: null
};

const mapStateToProps = state => ({
  currentUser: state.auth.userId,
  email: state.auth.email,
  password: state.auth.password
});

export default connect(mapStateToProps)(LoginContainer);
