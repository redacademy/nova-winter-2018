import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import { getUser, userLoading } from "../../redux/modules/userReducer";
import { ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { logOut } from "../../redux/modules/auth";
class UserProfileContainer extends Component {
  static route = {
    navigationBar: {
      title: "Profile"
    }
  };
  _logoutFunc = async () => {
    await this.props.navigation.performAction(({ stacks }) => {
      stacks("root").popToTop();
      stacks("main").popToTop();
      stacks("companies").popToTop();
    });
    this.props.dispatch(logOut());
  };
  componentDidMount = () => {
    this.props.dispatch(userLoading(true));
    this.props.dispatch(getUser(this.props.userID));
  };
  _logoutFunc = () => {
    this.props.dispatch(logOut());
  };

  render() {
    const userInfo = this.props.userInfo;
    if (this.props.userLoading) {
      return <ActivityIndicator />;
    }
    return <UserProfile userInfo={userInfo} logoutFunc={this._logoutFunc} />;
  }
}

UserProfileContainer.propTypes = {
  userID: PropTypes.string,
  userInfo: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  userLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    userID: state.auth.userId,
    userInfo: state.user.userInfo,
    userLoading: state.userLoading
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
