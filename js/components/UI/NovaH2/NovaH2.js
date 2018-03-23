import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { styles } from "./styles";

// H1 component, use for the largest, boldest headings
// You can find an example implementation in the ProjectResources component

const NovaH2 = ({ title, color, style }) => (
  <Text style={[styles.h2, style, { color: color }]}>{title}</Text>
);

NovaH2.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

NovaH2.defaultProps = {
  style: {},
  title: ""
};

export default NovaH2;
