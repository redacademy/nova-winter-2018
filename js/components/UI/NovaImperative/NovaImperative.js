import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { styles } from "./styles";

// Imperative Heading component, use for all the large achromatic imperatives.
// You can find an example implementation in the UserAccountCreate component

const NovaImperative = ({ title, color }) => (
  <Text style={[styles.imperative, { color: color }]}>{title}</Text>
);

NovaImperative.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default NovaImperative;
