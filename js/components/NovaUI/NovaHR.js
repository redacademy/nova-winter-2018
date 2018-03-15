import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { StyleSheet } from "react-native";

// Horizontal Rule component
// You can find an example implementation in the UserAccountCreate component

export default (NovaButton = ({ color }) => (
  <View style={styles.novaHROuterWrapper}>
    <View style={[styles.novaHRInner, { backgroundColor: color }]} />
  </View>
));

NovaButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export const styles = StyleSheet.create({
  novaHROuterWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16
  },
  novaHRInner: {
    width: 128,
    height: 4
  }
});
