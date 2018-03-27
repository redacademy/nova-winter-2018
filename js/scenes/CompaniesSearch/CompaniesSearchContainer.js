import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { Text, TouchableHighlight, ScrollView, View } from "react-native";
import CompaniesSearch from "./CompaniesSearch";
import PropTypes from "prop-types";
import {
  executeCompanySearch,
  setSearchQuery
} from "../../redux/modules/companyReducer";
import { colors } from "../../config/styles";
import { styles } from "./styles";

class CompaniesSearchContainer extends Component {
  static route = {
    navigationBar: {
      title: "Companies"
    }
  };

  componentDidMount() {
    if (!this.props.activeFilter) {
      this.props.dispatch(executeCompanySearch({ searchQuery: "*", page: 0 }));
    } else {
      this.props.dispatch(
        executeCompanySearch({ searchQuery: this.props.activeFilter, page: 0 })
      );
    }
  }

  _handleChange = async value => {
    await this.props.dispatch(setSearchQuery(value));
    if (this.props.activeFilter) {
      this.props.dispatch(
        executeCompanySearch({
          searchQuery: this.props.searchQuery,
          page: 0,
          filters: `tags: ${this.props.activeFilter}`
        })
      );
    } else {
      this.props.dispatch(
        executeCompanySearch({
          searchQuery: this.props.searchQuery,
          page: 0
        })
      );
    }
  };

  _getNextPage = (query, page) => {
    if (this.props.searchResults.page < this.props.searchResults.nbPages - 1) {
      this.props.dispatch(executeCompanySearch({ query, page }));
    }
  };

  _getPreviousPage = (query, page) => {
    if (this.props.searchResults.page > 0) {
      this.props.dispatch(executeCompanySearch({ query, page }));
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CompaniesSearch
          activeFilter={this.props.activeFilter}
          searchQuery={this.props.searchQuery}
          searchResults={this.props.searchResults.hits}
          handleChange={this._handleChange}
          handleSubmit={this._handleSubmit}
          currentNavigatorUID={this.props.currentNavigatorUID}
        />

        <View style={styles.controls}>
          {this.props.searchResults.page > 0 ? (
            <TouchableHighlight
              underlayColor={colors.mediumGrey}
              onPress={() => {
                this._getPreviousPage(
                  this.props.searchQuery,
                  this.props.searchResults.page - 1
                );
              }}
            >
              <View style={styles.paginationContainer}>
                <Text style={styles.paginationText}>See Previous</Text>
              </View>
            </TouchableHighlight>
          ) : (
            <Text> </Text>
          )}
          {this.props.searchResults.page <
          this.props.searchResults.nbPages - 1 ? (
            <TouchableHighlight
              underlayColor={colors.mediumGrey}
              onPress={() => {
                this._getNextPage(
                  this.props.searchQuery,
                  this.props.searchResults.page + 1
                );
              }}
            >
              <View style={styles.paginationContainer}>
                <Text style={styles.paginationText}>See More</Text>
                <Icon
                  name={"ios-arrow-down"}
                  size={25}
                  style={{ color: colors.red }}
                />
              </View>
            </TouchableHighlight>
          ) : (
            <Text> </Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  activeFilter: state.company.activeFilter,
  searchQuery: state.company.searchQuery,
  searchResults: state.company.companySearchResults,
  currentNavigatorUID: state.navigation.currentNavigatorUID
});

CompaniesSearchContainer.defaultProps = {
  searchResults: {}
};

CompaniesSearchContainer.propTypes = {
  activeFilter: PropTypes.string,
  currentNavigatorUID: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  searchResults: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(CompaniesSearchContainer);
