import React from "react";
import { FlatList, Image, TouchableHighlight, View } from "react-native";
import { goToScene } from "../../navigation/NavigationHelper";
import PropTypes from "prop-types";
import { styles } from "./styles";

const Companies = ({ companyList }) => (
  <View>
    <FlatList
      data={companyList}
      keyExtractor={item => item.name}
      numColumns={3}
      renderItem={({ item }) => (
        <TouchableHighlight
          onPress={() => goToScene("companies", "companyProfile", item.id)}
        >
          <Image style={styles.logo} source={{ uri: item.logo }} />
        </TouchableHighlight>
      )}
    />
  </View>
);

Companies.propTypes = {
  companyList: PropTypes.array.isRequired
};

export default Companies;
