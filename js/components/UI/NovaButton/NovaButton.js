import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";

// Button component
// You can find an example implementation in the UserAccountCreate component

const NovaButton = ({ title, color, style, onPress }) => (
  <View style={styles.novaButtonOuterWrapper}>
    <TouchableHighlight
      style={[styles.novaButtonTouchable, style, { backgroundColor: color }]}
      onPress={onPress}
    >
      <View style={styles.novaButtonInnerWrapper}>
        <Text style={styles.novaButtonText}>{title}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

NovaButton.defaultProps = {
  style: {}
};

NovaButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default NovaButton;
