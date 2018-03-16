// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885487

import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectConfirm from "./ProjectConfirm";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red } = colors;
const { fontMain } = typography;

class ProjectConfirmContainer extends Component {
  static route = {
    navigationBar: {
      title: "Start Project",
      backgroundColor: nearBlack,
      titleStyle: {
        color: "#ffffff",
        fontFamily: fontMain
      }
    }
  };

  render() {
    return <ProjectConfirm />;
  }
}

// ProjectConfirmContainer.propTypes = {};

export default ProjectConfirmContainer;
