import React, { Component } from "react";

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

export default ProjectResourceTestContainer;
