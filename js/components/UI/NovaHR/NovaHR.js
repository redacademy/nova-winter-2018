import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { styles } from "./styles";

// Horizontal Rule component
// You can find an example implementation in the UserAccountCreate component

const NovaHR = ({ color }) => (
  <View style={styles.novaHROuterWrapper}>
    <View style={[styles.novaHRInner, { backgroundColor: color }]} />
  </View>
);

NovaHR.defaultProps = {
  style: {}
};

NovaHR.propTypes = {
  color: PropTypes.string.isRequired
};

export default NovaHR;
