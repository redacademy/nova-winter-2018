// https://projects.invisionapp.com/share/GRFWI99HZKW#/screens/279885494

import React, { Component } from "react";
import CompaniesSearch from "./CompaniesSearch";

class CompaniesSearchContainer extends Component {
  static route = {
    navigationBar: {
      title: "Filter"
    }
  };

  render() {
    return <CompaniesSearch />;
  }
}

export default CompaniesSearchContainer;
