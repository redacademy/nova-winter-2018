// this component will need some conditional rendering.
// before the user has watched the videos:
// https://projects.invisionapp.com/d/main/default/#/console/13659608/284837900/preview
// after completing watching the videos:
// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885479

import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectResources from "./ProjectResources";

class ProjectResourcesContainer extends Component {
  static route = {
    navigationBar: {
      title: "ProjectResources"
    }
  };

  render() {
    return <ProjectResources />;
  }
}

// ProjectResourcesContainer.propTypes = {};

export default ProjectResourcesContainer;
