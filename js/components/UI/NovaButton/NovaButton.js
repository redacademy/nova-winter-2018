import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";

const NovaButton = ({ title, color, onPressFunc, onPressParams }) => (
  <View style={styles.novaButtonOuterWrapper}>
    <TouchableHighlight
      style={[styles.novaButtonTouchable, { backgroundColor: color }]}
      onPress={() => {
        onPressFunc(onPressParams);
      }}
    >
      <View style={styles.novaButtonInnerWrapper}>
        <Text style={styles.novaButtonText}>{title}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

NovaButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPressFunc: PropTypes.func,
  color: PropTypes.string.isRequired,
  onPressParams: PropTypes.object
};

NovaButton.defaultProps = {
  onPressParams: null,
  style: {},
  onPressFunc: undefined
};

export default NovaButton;
