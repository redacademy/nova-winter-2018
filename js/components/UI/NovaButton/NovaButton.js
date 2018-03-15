import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";

// Button component
// You can find an example implementation in the UserAccountCreate component

const NovaButton = ({ title, color, onPress }) => (
  <View style={styles.novaButtonOuterWrapper}>
    <TouchableHighlight
      style={[styles.novaButtonTouchable, { backgroundColor: color }]}
      onPress={onPress}
    >
      <View style={styles.novaButtonInnerWrapper}>
        <Text style={styles.novaButtonText}>{title}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

NovaButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default NovaButton;
