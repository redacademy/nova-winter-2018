import React, { Component } from "react";

import UserProfileConfirm from "./UserProfileConfirm";
import { buttonToScene } from "../../navigation/NavigationHelper";
import { colors, typography } from "../../config/styles.js";
const { nearBlack } = colors;
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

  _routeToLayout = async params => {
    await this.props.navigation.performAction(({ stacks }) => {
      stacks("userProfile").popToTop();
    });
    buttonToScene(params);
  };
  render() {
    return <UserProfileConfirm routeToLayout={this._routeToLayout} />;
  }
}

export default UserProfileConfirmContainer;
