import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { typography } from "../../config/styles";

const { fontMain } = typography;

// H1 component, use for the largest, boldest headings
// You can find an example implementation in the ProjectResources component

export default (NovaH2 = ({ title, color }) => (
  <Text style={[styles.h2, { color: color }]}>{title}</Text>
));

NovaButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string
};

export const styles = StyleSheet.create({
  h2: {
    textAlign: "center",
    fontFamily: fontMain,
    fontSize: 20,
    marginTop: 16,
    fontWeight: "bold"
  }
});
