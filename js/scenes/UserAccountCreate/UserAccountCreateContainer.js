// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885486

import React, { Component } from "react";
import PropTypes from "prop-types";
import UserAccountCreate from "./UserAccountCreate";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red } = colors;
const { fontMain } = typography;

class UserAccountCreateContainer extends Component {
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
    return <UserAccountCreate />;
  }
}

// UserAccountCreateContainer.propTypes = {};

export default UserAccountCreateContainer;
