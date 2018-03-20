import React, { Component } from "react";

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
