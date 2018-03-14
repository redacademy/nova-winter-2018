// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885500

import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectResourceTest from "./ProjectResourceTest";

class ProjectResourceTestContainer extends Component {
  static route = {
    navigationBar: {
      title: "ProjectResourceTest"
    }
  };

  render() {
    return <ProjectResourceTest />;
  }
}

// ProjectResourcesTestContainer.propTypes = {};

export default ProjectResourceTestContainer;
