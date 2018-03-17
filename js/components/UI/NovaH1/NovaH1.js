import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { styles } from "./styles";

// H1 component, use for the largest, boldest headings
// You can find an example implementation in the UserAccountConfirm component

const NovaH1 = ({ title, color, style }) => (
  <Text style={[styles.h1, style, { color: color }]}>{title}</Text>
);

NovaH1.defaultProps = {
  style: {}
};

NovaH1.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default NovaH1;
