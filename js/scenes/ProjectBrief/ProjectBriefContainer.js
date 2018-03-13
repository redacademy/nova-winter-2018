// This component will need some conditional rendering
// before the user has completed the test:
// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885497
// after completing the test:
// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885496

import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectBrief from "./ProjectBrief";

class ProjectBriefContainer extends Component {
  static route = {
    navigationBar: {
      title: "ProjectBrief"
    }
  };

  render() {
    return <ProjectBrief />;
  }
}

// ProjectBriefContainer.propTypes = {};

export default ProjectBriefContainer;
