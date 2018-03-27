import React, { Component } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { styles } from "./styles";

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.splash}>
        <ActivityIndicator />
      </View>
    );
  }
}
