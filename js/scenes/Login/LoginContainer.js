import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Login from "./Login";

import {
  setEmailState,
  setPasswordState,
  login
} from "../../redux/modules/auth";
import { colors, typography } from "../../config/styles.js";
const { nearBlack } = colors;
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

  static route = {
    navigationBar: {
      title: "Login",
      backgroundColor: nearBlack,
      visible: false,
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
        password={this.props.password}
        email={this.props.email}
        currentUser={this.props.currentUser}
        navigatorUID={this.props.navigatorUID}
      />
    );
  }
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.string,
  email: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  navigatorUID: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired
};

LoginContainer.defaultProps = {
  currentUser: ""
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  currentUser: state.auth.userId,
  email: state.auth.email,
  password: state.auth.password,
  navigatorUID: state.navigation.currentNavigatorUID
});

export default connect(mapStateToProps)(LoginContainer);
