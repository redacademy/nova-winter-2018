// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885488

import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectResourceTestResults from "./ProjectResourceTestResults";

class ProjectResourceTestResultsContainer extends Component {
  static route = {
    navigationBar: {
      title: "ProjectResourceTestResults"
    }
  };

  render() {
    return <ProjectResourceTestResults />;
  }
}

// ProjectResourceTestResultsContainer.propTypes = {};

export default ProjectResourceTestResultsContainer;
