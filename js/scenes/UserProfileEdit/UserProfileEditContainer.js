// there isn't really a prototype for this but there's an indication that it should exist when you click the edit button here:
// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885483

import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfileEdit from "./UserProfileEdit";

class UserProfileEditContainer extends Component {
  static route = {
    navigationBar: {
      title: "UserProfileEdit"
    }
  };

  render() {
    return <UserProfileEdit />;
  }
}

// UserProfileEditContainer.propTypes = {};

export default UserProfileEditContainer;
