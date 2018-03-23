import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import PropTypes from "prop-types";

import { colors } from "../../config/styles";
import { styles } from "./styles";
import { goBack } from "../../navigation/NavigationHelper";
import NovaImperative from "../../components/UI/NovaImperative";

const CompaniesFilter = ({
  handleChange,
  filterSearchResults,
  activeFilter,
  handleClick
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
    <TextInput
      style={styles.searchBar}
      autoCapitalize="none"
      placeholder="Search"
      onChange={e => {
        handleChange(e.nativeEvent.text);
      }}
    />
    <View style={styles.horizontalRule} />

    {activeFilter ? (
      <View>
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
    <View>
      <TouchableHighlight
        underlayColor={colors.mediumGrey}
        onPress={() => {
          goBack();
        }}
      >
        <Text style={styles.closeFilter}>^</Text>
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
