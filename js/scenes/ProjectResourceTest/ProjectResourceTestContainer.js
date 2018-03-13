// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885500

import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectResourcesTest from "./ProjectResourcesTest";

class ProjectResourcesTestContainer extends Component {
  static route = {
    navigationBar: {
      title: "ProjectResourcesTest"
    }
  };

  render() {
    return <ProjectResourcesTest />;
  }
}

// ProjectResourcesTestContainer.propTypes = {};

export default ProjectResourcesTestContainer;
