import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "../../config/styles";
const { red, white, tintBlack } = colors;

// import Nova UI components:
import NovaButton from "../../components/UI/NovaButton";
import NovaH1 from "../../components/UI/NovaH1";

const UserAccountConfirm = () => (
  <View style={styles.container}>
    <View>
      <NovaH1 color={white} title="Account Created" />
      <Text style={styles.message}>
        Now {"let's"} create a profile so you can start exploring for companies
        to connect with!
      </Text>
      <NovaButton title="CREATE PROFILE" color={tintBlack} onPress={null} />
    </View>
  </View>
);

export default UserAccountConfirm;
