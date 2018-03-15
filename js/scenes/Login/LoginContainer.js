import React, { Component } from "react";

import Login from "./Login";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red } = colors;
const { fontMain } = typography;
class LoginContainer extends Component {
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
    return <Login />;
  }
}

export default LoginContainer;
