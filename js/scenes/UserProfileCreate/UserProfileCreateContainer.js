import React, { Component } from "react";
import PropTypes from "prop-types";
import UserProfileCreate from "./UserProfileCreate";
import { connect } from "react-redux";
import { colors, typography } from "../../config/styles.js";
import { writeProfileToDatabase } from "../../api/profileHelper";
import { goToScene } from "../../navigation/NavigationHelper";
import {
  setProfileBio,
  setProfileExperience,
  setProfileEducation,
  setProfileGlobal,
  setProfileName,
  setProfileProjects,
  setProfileQuote,
  setProfileReferences,
  setProfileImage,
  setProfileTitle
} from "../../redux/modules/profileReducer";
const { nearBlack } = colors;
const { fontMain } = typography;

class UserProfileCreateContainer extends Component {
  static route = {
    navigationBar: {
      title: "Profile",
      backgroundColor: nearBlack,
      titleStyle: {
        color: "#ffffff",
        fontFamily: fontMain
      }
    }
  };
  _handleChangeBio = value => {
    this.props.dispatch(setProfileBio(value));
  };
  _handleChangeExperience = value => {
    this.props.dispatch(setProfileExperience(value));
  };
  _handleChangeEducation = value => {
    this.props.dispatch(setProfileEducation(value));
  };
  _handleChangeGlobal = value => {
    this.props.dispatch(setProfileGlobal(value));
  };
  _handleChangeName = value => {
    this.props.dispatch(setProfileName(value));
  };
  _handleChangeProjects = value => {
    this.props.dispatch(setProfileProjects(value));
  };
  _handleChangeQuote = value => {
    this.props.dispatch(setProfileQuote(value));
  };
  _handleChangeReferences = value => {
    this.props.dispatch(setProfileReferences(value));
  };
  _handleChangeImage = value => {
    setProfileImage, this.props.dispatch(setProfileImage(value));
  };
  _handleChangeTitle = value => {
    this.props.dispatch(setProfileTitle(value));
  };
  _handleSubmit = async () => {
    const submitData = {
      userID: this.props.userID,
      bio: this.props.bio,
      experience: this.props.experience,
      education: this.props.education,
      global: this.props.global,
      name: this.props.name,
      projects: this.props.projects,
      quote: this.props.quote,
      references: this.props.references,
      image: this.props.image,
      title: this.props.title
    };
    await writeProfileToDatabase(submitData);
    goToScene("root", "userProfileConfirm");
  };
  render() {
    return (
      <UserProfileCreate
        userID={this.props.userID}
        handleChangeBio={this._handleChangeBio}
        handleChangeExperience={this._handleChangeExperience}
        handleChangeEducation={this._handleChangeEducation}
        handleChangeGlobal={this._handleChangeGlobal}
        handleChangeName={this._handleChangeName}
        handleChangeProjects={this._handleChangeProjects}
        handleChangeQuote={this._handleChangeQuote}
        handleChangeReferences={this._handleChangeReferences}
        handleChangeImage={this._handleChangeImage}
        handleChangeTitle={this._handleChangeTitle}
        handleSubmit={this._handleSubmit}
        bio={this.props.bio}
        experience={this.props.experience}
        education={this.props.education}
        global={this.props.global}
        name={this.props.name}
        projects={this.props.projects}
        quote={this.props.quote}
        references={this.props.references}
        image={this.props.image}
        title={this.props.title}
      />
    );
  }
}

const mapStateToProps = state => ({
  userID: state.auth.userId,
  bio: state.profile.bio,
  experience: state.profile.experience,
  education: state.profile.education,
  global: state.profile.global,
  name: state.profile.name,
  projects: state.profile.projects,
  quote: state.profile.quote,
  references: state.profile.references,
  image: state.profile.image,
  title: state.profile.title
});

UserProfileCreateContainer.defaultProps = {
  userID: "",
  bio: "",
  experience: "",
  education: "",
  global: "",
  name: "",
  projects: "",
  quote: "",
  references: "",
  image: "",
  title: ""
};
UserProfileCreateContainer.propTypes = {
  userID: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  bio: PropTypes.string,
  experience: PropTypes.string,
  education: PropTypes.string,
  global: PropTypes.string,
  name: PropTypes.string,
  projects: PropTypes.string,
  quote: PropTypes.string,
  references: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string
};
export default connect(mapStateToProps)(UserProfileCreateContainer);
