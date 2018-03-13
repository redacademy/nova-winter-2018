// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885495

import React, { Component } from "react";
import PropTypes from "prop-types";
import CompanyProfile from "./CompanyProfile";

class CompanyProfileContainer extends Component {
  static route = {
    navigationBar: {
      title: "CompanyProfile"
    }
  };

  render() {
    return <CompanyProfile />;
  }
}

// CompanyProfileContainer.propTypes = {};

export default CompanyProfileContainer;
