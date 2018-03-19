import React, { Component } from "react";

import ProjectResourceTestResults from "./ProjectResourceTestResults";

class ProjectResourceTestResultsContainer extends Component {
  static route = {
    navigationBar: {
      title: "ProjectResourceTestResults"
    }
  };
  componentDidMount() {}
  render() {
    return <ProjectResourceTestResults score={this.props.route.params.props} />;
  }
}

export default ProjectResourceTestResultsContainer;
