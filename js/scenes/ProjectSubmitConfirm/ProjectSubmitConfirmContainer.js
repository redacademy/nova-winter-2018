// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885501

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

// ProjectSubmitConfirmContainer.propTypes = {};

export default ProjectSubmitConfirmContainer;
