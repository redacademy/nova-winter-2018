import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Login from "./Login";

import { colors, typography } from "../../config/styles.js";
const { nearBlack } = colors;
const { fontMain } = typography;
import { login, logOut } from "../../redux/modules/auth";

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  _handleChange = (stateProperty, value) => {
    this.setState({ [stateProperty]: value });
  };

  _handleSubmit = ({ email, password }) => {
    if (this.state.email && this.state.password) {
      this.props.dispatch(login({ email, password }));
    }
  };
  _logOut = userId => {
    this.props.dispatch(logOut(userId));
  };

  static route = {
    navigationBar: {
      title: "Login",
      backgroundColor: nearBlack,
      titleStyle: {
        color: "#ffffff",
        fontFamily: fontMain
      }
    }
  };

  render() {
    return (
      <Login
        handleChange={this._handleChange}
        handleSubmit={this._handleSubmit}
        logOut={this._logOut}
        password={this.state.password}
        email={this.state.email}
        currentUser={this.props.currentUser}
      />
    );
  }
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func,
  currentUser: PropTypes.string
};
const mapStateToProps = state => ({
  currentUser: state.auth.userId
});

export default connect(mapStateToProps)(LoginContainer);
