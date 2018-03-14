// A component that links to all of the project's scenes so that we can easily access them during development.
// Delete before shipping

import React, { Component } from "react";
import PropTypes from "prop-types";
import DevRoutes from "./DevRoutes";

class DevRoutesContainer extends Component {
  static route = {
    navigationBar: {
      title: "DevRoutes"
    }
  };

  render() {
    return <DevRoutes />;
  }
}

// DevRoutesContainer.propTypes = {};

export default DevRoutesContainer;
