// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885487

import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectConfirm from "./ProjectConfirm";

class ProjectConfirmContainer extends Component {
  static route = {
    navigationBar: {
      title: "ProjectConfirm"
    }
  };

  render() {
    return <ProjectConfirm />;
  }
}

// ProjectConfirmContainer.propTypes = {};

export default ProjectConfirmContainer;
