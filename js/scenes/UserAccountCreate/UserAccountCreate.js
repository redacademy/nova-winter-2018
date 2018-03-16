import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "./styles";

import { colors } from "../../config/styles";
const { green, red, white } = colors;

// import Nova UI components:
import NovaButton from "../../components/UI/NovaButton";
import NovaHR from "../../components/UI/NovaHR";
import NovaImperative from "../../components/UI/NovaImperative";

const UserAccountCreate = () => (
  <View style={styles.container}>
    <NovaImperative color={white} title="Create An Account" />
    <NovaHR color={green} />
    <TextInput value="Full Name" style={styles.input} />
    <TextInput value="Email" style={styles.input} />{" "}
    <TextInput value="Password" style={styles.input} />
    <TextInput value="Confirm Password" style={styles.inputLast} />
    <NovaButton title="CREATE" color={red} onPress={null} />
  </View>
);

export default UserAccountCreate;
