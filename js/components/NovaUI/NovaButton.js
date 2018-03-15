import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableHighlight, View } from "react-native";
import { StyleSheet } from "react-native";
import { typography } from "../../config/styles";
const { fontMain } = typography;

// Button component
// You can find an example implementation in the UserAccountCreate component

export default (NovaButton = ({ title, color, onPress }) => (
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
));

NovaButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string
};

export const styles = StyleSheet.create({
  novaButtonOuterWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16
  },
  novaButtonTouchable: {
    width: 192,
    height: 48,
    borderRadius: 4
  },
  novaButtonInnerWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  novaButtonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontFamily: fontMain
  }
});
