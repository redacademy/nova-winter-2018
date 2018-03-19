import React, { Component } from "react";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, tintBlack, green, red } = colors;
const { fontMain } = typography;
import UserAccountConfirm from "./UserAccountConfirm";

class UserAccountConfirmContainer extends Component {
  static route = {
    navigationBar: {
      title: "Sign Up",
      backgroundColor: tintBlack,
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
