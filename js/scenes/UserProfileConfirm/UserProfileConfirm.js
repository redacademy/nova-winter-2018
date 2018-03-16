import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../config/styles";
const { red, white, nearBlack } = colors;
import { styles } from "./styles";
// import Nova UI components:
import NovaButton from "../../components/UI/NovaButton";
import NovaH1 from "../../components/UI/NovaH1";

const UserProfileConfirm = () => (
  <View style={styles.container}>
    <NovaH1 title="Profile Created" color={white} />
    <Text style={styles.message}>{"It's time to start exploring!"}</Text>
    <NovaButton title="CONTINUE" color={nearBlack} onPress={null} />
  </View>
);

export default UserProfileConfirm;
