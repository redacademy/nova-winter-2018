import React, { Component } from "react";
import PropTypes from "prop-types";
import Login from "./Login";

class LoginContainer extends Component {
  static route = {
    navigationBar: {
      title: "Login"
    }
  };

  render() {
    return <Login />;
  }
}

// LoginContainer.propTypes = {};

export default LoginContainer;
