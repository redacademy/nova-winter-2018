import React, { Component } from "react";
import { colors, typography } from "../../config/styles.js";
import { getCompanyQuestions } from "../../redux/modules/companyReducer";
import ProjectResourceTest from "./ProjectResourceTest";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const { nearBlack } = colors;
const { fontMain } = typography;
class ProjectResourceTestContainer extends Component {
  static route = {
    navigationBar: {
      title: "Resource Test",
      backgroundColor: nearBlack,
      titleStyle: {
        color: "#ffffff",
        fontFamily: fontMain
      }
    }
  };
  componentDidMount() {
    this.props.dispatch(getCompanyQuestions("adobe", "indesign"));
  }

  render() {
    const answers = this.props.answers;
    const questions = this.props.questions;

    return <ProjectResourceTest solutions={answers} questions={questions} />;
  }
}
const mapStateToProps = state => {
  return {
    questions: state.company.questions.questions,
    answers: state.company.questions.answers
  };
};
ProjectResourceTestContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired
};

ProjectResourceTestContainer.defaultProps = {
  questions: ["", "", "", "", "", ""],
  answers: [false, false, false, false, false]
};
export default connect(mapStateToProps)(ProjectResourceTestContainer);
