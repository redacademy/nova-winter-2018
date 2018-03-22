import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectResourceTestResults from "./ProjectResourceTestResults";

class ProjectResourceTestResultsContainer extends Component {
  static route = {
    navigationBar: {
      title: "ProjectResourceTestResults",
      visible: false
    }

  };
  componentDidMount() { }
  render() {
    return <ProjectResourceTestResults score={this.props.route.params.props} />;
  }
}

ProjectResourceTestResultsContainer.propTypes = {

  route: PropTypes.object.isRequired
};

export default ProjectResourceTestResultsContainer;
