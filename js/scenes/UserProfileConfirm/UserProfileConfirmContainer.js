// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885489

import React, { Component } from "react";

import UserProfileConfirm from "./UserProfileConfirm";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red } = colors;
const { fontMain } = typography;

class UserProfileConfirmContainer extends Component {
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
    return <UserProfileConfirm />;
  }
}

export default UserProfileConfirmContainer;
