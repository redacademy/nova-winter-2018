import React, { Component } from "react";
import Companies from "./Companies";
import { connect } from "react-redux";

class CompaniesContainer extends Component {
  static route = {
    navigationBar: {
      title: "Companies"
    }
  };

  render() {
    return <Companies />;
  }
}

export default CompaniesContainer;
