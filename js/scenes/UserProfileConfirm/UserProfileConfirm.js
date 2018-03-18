import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../config/styles";

import { styles } from "./styles";
// import Nova UI components:
import NovaButton from "../../components/UI/NovaButton";
import NovaH1 from "../../components/UI/NovaH1";
const { red, white, nearBlack } = colors;
const UserProfileConfirm = () => (
  <View style={styles.container}>
    <NovaH1 title="Profile Created" color={white} />
    <Text style={styles.message}>{"It's time to start exploring!"}</Text>
    <NovaButton title="CONTINUE" color={nearBlack} onPress={null} />
  </View>
);

export default UserProfileConfirm;
