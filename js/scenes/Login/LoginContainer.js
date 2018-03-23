import React, { Component } from "react";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";
import PropTypes from "prop-types";
import Login from "./Login";

import Router from "../../navigation/Router";
import {
  setAuthenticationStatus,
  setUserState,
  userLoading,
  setEmailState,
  setPasswordState,
  login,
  logOut
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

  _handleSubmit = async ({ email, password }) => {
    if (this.props.email && this.props.password) {
      await this.props.dispatch(login({ email, password }));

      if (this.props.authenticated) {
        this._goToLayout();
      }
    }
  };
  _logOut = () => {
    this.props.dispatch(logOut());
  };

  _goToLayout = () => {
    this.props.navigator.push(Router.getRoute("layout"));
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

  componentDidMount() {
    this.props.dispatch(userLoading(true));
    AsyncStorage.getItem("USER", (err, result) => {
      if (result) {
        this.props.dispatch(setUserState(JSON.parse(result)));
        this.props.dispatch(setAuthenticationStatus(true));
      }
      this.props.dispatch(userLoading(false));
      if (this.props.authenticated) {
        this._goToLayout();
      }
    });
  }

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
