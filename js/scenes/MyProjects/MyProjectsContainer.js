// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885503

import React, { Component } from "react";
import PropTypes from "prop-types";
import MyProjects from "./MyProjects";

class MyProjectsContainer extends Component {
  static route = {
    navigationBar: {
      title: "MyProjects"
    }
  };

  render() {
    return <MyProjects />;
  }
}

// MyProjectsContainer.propTypes = {};

export default MyProjectsContainer;
