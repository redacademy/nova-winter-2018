import React, { Component } from "react";

import UserProfileConfirm from "./UserProfileConfirm";

class UserProfileConfirmContainer extends Component {
  static route = {
    navigationBar: {
      title: "UserProfileConfirm"
    }
  };

  render() {
    return <UserProfileConfirm />;
  }
}

export default UserProfileConfirmContainer;
