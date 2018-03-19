import React, { Component } from "react";

import ProjectConfirm from "./ProjectConfirm";
import { colors, typography } from "../../config/styles.js";
const { tintBlack } = colors;
const { fontMain } = typography;

class ProjectConfirmContainer extends Component {
  static route = {
    navigationBar: {
      title: "Start Project",
      backgroundColor: tintBlack,
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

export default ProjectConfirmContainer;
