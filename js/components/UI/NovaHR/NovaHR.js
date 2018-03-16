import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { styles } from "./styles";

// Horizontal Rule component
// Style components for the thick underlines in designs of certain pages
// You can find an example implementation in the UserAccountCreate component

const NovaHR = ({ color }) => (
  <View>
    <View style={[styles.novaHRInner, { backgroundColor: color }]} />
  </View>
);

NovaHR.propTypes = {
  color: PropTypes.string.isRequired
};

export default NovaHR;
