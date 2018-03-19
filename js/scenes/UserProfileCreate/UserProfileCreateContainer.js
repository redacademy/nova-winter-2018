import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfileCreate from "./UserProfileCreate";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, tintBlack, green, red } = colors;
const { fontMain } = typography;

class UserProfileCreateContainer extends Component {
  static route = {
    navigationBar: {
      title: "Profile",
      backgroundColor: tintBlack,
      titleStyle: {
        color: "#ffffff",
        fontFamily: fontMain
      }
    }
  };

  render() {
    return <UserProfileCreate />;
  }
}

export default UserProfileCreateContainer;
