import React, { Component } from "react";
import PropTypes from "prop-types";
import Login from "./Login";
// import {
//   getCompany,
//   getCompanyProjects,
//   getUser,
//   getCompanyQuestions
// } from "../../firebaseFunctions/firebase";

class LoginContainer extends Component {
  static route = {
    navigationBar: {
      title: "Login"
    }
  };

  render() {
    // console.log(getCompany("IxTyhQSllwOPTG0u3qCF"));
    // console.log(getUser("WJTvKQHAwP9frwE46woO"));
    // console.log(getCompanyProjects("IxTyhQSllwOPTG0u3qCF", "project1"));
    // console.log(
    //   getCompanyQuestions("IxTyhQSllwOPTG0u3qCF", "project1", "question1")

    return <Login />;
  }
}

// LoginContainer.propTypes = {};

export default LoginContainer;
