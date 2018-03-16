import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import { connect } from "react-redux";
import { getUser } from "../../redux/modules/userReducer";
class UserProfileContainer extends Component {
  constructor(props) {
    super(props);
  }
  static route = {
    navigationBar: {
      title: "UserProfile"
    }
  };

  render() {
    this.props.dispatch(getUser("WJTvKQHAwP9frwE46woO"));
    return <UserProfile />;
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo
});

export default connect(mapStateToProps)(UserProfileContainer);
