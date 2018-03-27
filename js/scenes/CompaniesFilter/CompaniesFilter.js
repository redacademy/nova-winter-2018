import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

import { colors } from "../../config/styles";
import { styles } from "./styles";
import { goBack } from "../../navigation/NavigationHelper";
import NovaImperative from "../../components/UI/NovaImperative";

const CompaniesFilter = ({
  handleChange,
  filterSearchResults,
  activeFilter,
  handleClick,
  handleGoBack
}) => (
  <ScrollView
    style={styles.container}
    scontentContainerStyle={styles.scrollContainer}
  >
    <NovaImperative
      color="black"
      title="Search for Your Industry of Interest"
      style={{ textAlign: "left" }}
    />
    <View style={styles.searchBar}>
      <Icon
        name="ios-search"
        size={16}
        style={styles.searchIcon}
        color={colors.darkGrey}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Search"
        style={{ marginLeft: 10 }}
        onChange={e => {
          handleChange(e.nativeEvent.text);
        }}
      />
    </View>
    <View style={styles.horizontalRule} />

    {activeFilter ? (
      <View style={styles.searchResults}>
        <Text>Active Filter</Text>
        <TouchableHighlight
          underlayColor={colors.mediumGrey}
          onPress={() => {
            handleClick(activeFilter);
          }}
        >
          <Text style={styles.filterText}>{activeFilter} </Text>
        </TouchableHighlight>
      </View>
    ) : (
      <View style={styles.searchResults}>
        <FlatList
          data={filterSearchResults}
          keyExtractor={item => item}
          numColumns={1}
          renderItem={({ item }) => (
            <TouchableHighlight
              underlayColor={colors.mediumGrey}
              onPress={() => {
                handleClick(item);
              }}
            >
              <Text style={styles.filterText}>{item} </Text>
            </TouchableHighlight>
          )}
        />
      </View>
    )}
    <View style={styles.goBack}>
      <TouchableHighlight
        underlayColor={colors.mediumGrey}
        onPress={() => {
          handleGoBack();
        }}
      >
        <Icon style={styles.closeFilter} name="ios-arrow-up" />
      </TouchableHighlight>
    </View>
  </ScrollView>
);

CompaniesFilter.propTypes = {
  activeFilter: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  filterSearchResults: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default CompaniesFilter;
