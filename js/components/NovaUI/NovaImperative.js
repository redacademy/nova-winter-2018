import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { typography } from "../../config/styles";
const { fontMain } = typography;

// Imperative Heading component, use for all the large achromatic imperatives.
// You can find an example implementation in the UserAccountCreate component

export default (NovaImperative = ({ title, color }) => (
  <Text style={[styles.imperative, { color: color }]}>{title}</Text>
));

NovaImperative.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string
};

export const styles = StyleSheet.create({
  imperative: {
    textAlign: "center",
    fontFamily: fontMain,
    fontSize: 28,
    marginTop: 48
  }
});
