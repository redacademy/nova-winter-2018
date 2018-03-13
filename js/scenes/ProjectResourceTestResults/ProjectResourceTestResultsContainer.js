// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885488

import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectResourcesTestResults from "./ProjectResourcesTestResults";

class ProjectResourcesTestResultsContainer extends Component {
  static route = {
    navigationBar: {
      title: "ProjectResourcesTestResults"
    }
  };

  render() {
    return <ProjectResourcesTestResults />;
  }
}

// ProjectResourcesTestResultsContainer.propTypes = {};

export default ProjectResourcesTestResultsContainer;
