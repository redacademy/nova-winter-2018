// A component that links to all of the project's scenes so that we can easily access them during development.
// Delete before shipping

import React, { Component } from "react";
import PropTypes from "prop-types";
import DevRoutes from "./DevRoutes";
import { connect } from "react-redux";
import { logOut } from "../../redux/modules/auth";

class DevRoutesContainer extends Component {
  static route = {
    navigationBar: {
      title: "DevRoutes"
    }
  };

  _logOut = () => {
    this.props.logOut();
  };

  render() {
    return <DevRoutes logOut={this._logOut} />;
  }
}

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    dispatch(logOut());
  }
});

DevRoutesContainer.propTypes = {
  logOut: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(DevRoutesContainer);
