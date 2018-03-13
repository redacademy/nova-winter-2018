// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885499

import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectSubmit from "./ProjectSubmit";

class ProjectSubmitContainer extends Component {
  static route = {
    navigationBar: {
      title: "ProjectSubmit"
    }
  };

  render() {
    return <ProjectSubmit />;
  }
}

// ProjectSubmitContainer.propTypes = {};

export default ProjectSubmitContainer;
