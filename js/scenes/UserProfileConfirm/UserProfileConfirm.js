import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../config/styles";
const { red } = colors;

// import Nova UI components:
import NovaButton from "../../components/UI/NovaButton";
import NovaH1 from "../../components/UI/NovaH1";

const UserProfileConfirm = () => (
  <View>
    <NovaH1 title="Profile Created" color={red} />
    <Text>{"It's time to start exploring!"}</Text>
    <NovaButton title="CONTINUE" color="black" onPress={null} />
  </View>
);

export default UserProfileConfirm;
