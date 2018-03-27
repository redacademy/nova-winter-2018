import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import { getUser } from "../../redux/modules/userReducer";
import { connect } from "react-redux";

class UserProfileContainer extends Component {
  static route = {
    navigationBar: {
      title: "Profile"
    }
  };
  componentDidMount = () => {
    this.props.dispatch(getUser(this.props.userID));
  };

  render() {
    const userInfo = this.props.userInfo;
    return <UserProfile userInfo={userInfo} />;
  }
}

UserProfileContainer.propTypes = {
  userID: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    userID: state.auth.userId,
    userInfo: state.user.userInfo
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
