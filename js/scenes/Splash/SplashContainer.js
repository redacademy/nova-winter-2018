// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens

import React, { Component } from "react";
import PropTypes from "prop-types";
import Splash from "./Splash";

class SplashContainer extends Component {
  static route = {
    navigationBar: {
      title: "Splash"
    }
  };

  render() {
    return <Splash />;
  }
}

// SplashContainer.propTypes = {};

export default SplashContainer;
