import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import PropTypes from "prop-types";

import CompaniesFilter from "./CompaniesFilter";
import {
  toggleFilterTag,
  executeFilterSearch,
  setSearchQuery
} from "../../redux/modules/companyReducer";
import { goToScene } from "../../navigation/NavigationHelper";

class CompaniesFilterContainer extends Component {
  static route = {
    navigationBar: {
      title: "Filter"
    }
  };

  componentDidMount() {
    this.props.dispatch(executeFilterSearch("*"));
  }

  _handleChange = async value => {
    await this.props.dispatch(setSearchQuery(value));
    this.props.dispatch(executeFilterSearch(this.props.searchQuery));
  };

  _handleClick = async filterTag => {
    if (filterTag !== this.props.activeFilter) {
      await this.props.dispatch(toggleFilterTag(filterTag));
      goToScene(this.props.currentNavigatorUID, "companiesSearch");
    } else {
      await this.props.dispatch(toggleFilterTag(null));
    }
  };

  render() {
    return (
      <View>
        <View>
          <CompaniesFilter
            searchQuery={this.props.searchQuery}
            filterSearchResults={this.props.filterSearchResults}
            handleChange={this._handleChange}
            handleClick={this._handleClick}
            activeFilter={this.props.activeFilter}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  searchQuery: state.company.searchQuery,
  filterSearchResults: state.company.filterSearchResults,
  currentNavigatorUID: state.navigation.currentNavigatorUID,
  activeFilter: state.company.activeFilter
});

CompaniesFilterContainer.defaultProps = {
  filterSearchResults: [],
  activeFilter: null
};

CompaniesFilterContainer.propTypes = {
  currentNavigatorUID: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  filterSearchResults: PropTypes.array,
  activeFilter: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(CompaniesFilterContainer);
