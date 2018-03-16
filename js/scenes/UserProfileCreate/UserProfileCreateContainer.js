// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885491

import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfileCreate from "./UserProfileCreate";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red } = colors;
const { fontMain } = typography;

class UserProfileCreateContainer extends Component {
  static route = {
    navigationBar: {
      title: "Profile",
      backgroundColor: nearBlack,
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

// UserProfileCreateContainer.propTypes = {};

export default UserProfileCreateContainer;
