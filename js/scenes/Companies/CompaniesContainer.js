// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885494

import React, { Component } from "react";
import PropTypes from "prop-types";
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

const mapStateToProps = state => {
  return {
    companyList: state.company.companyList
  };
};

export default connect(mapStateToProps)(CompaniesContainer);
