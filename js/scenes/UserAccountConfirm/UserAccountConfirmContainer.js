import React, { Component } from "react";
import { colors, typography } from "../../config/styles.js";
import UserAccountConfirm from "./UserAccountConfirm";
const { black, mediumGrey, nearBlack, green, red } = colors;
const { fontMain } = typography;

class UserAccountConfirmContainer extends Component {
  static route = {
    navigationBar: {
      title: "Sign Up",
      backgroundColor: nearBlack,
      titleStyle: {
        color: "#ffffff",
        fontFamily: fontMain
      }
    }
  };

  render() {
    return <UserAccountConfirm />;
  }
}

export default UserAccountConfirmContainer;
