import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectSubmitConfirm from "./ProjectSubmitConfirm";

class ProjectSubmitConfirmContainer extends Component {
  static route = {
    navigationBar: {
      title: "ProjectSubmitConfirm"
    }
  };

  render() {
    return <ProjectSubmitConfirm />;
  }
}

export default ProjectSubmitConfirmContainer;
