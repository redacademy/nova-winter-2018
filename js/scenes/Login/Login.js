import React from "react";

import { Text, View, TextInput, Image, TouchableHighlight } from "react-native";

import { styles } from "./styles";
import NovaButton from "../../components/UI/NovaButton/";
import NovaHR from "../../components/UI/NovaHR/";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red } = colors;
const { fontMain } = typography;
const Login = () => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require("../../assets/images/NLogo.png")}
      resizeMode="contain"
    />
    <Image
      style={styles.header}
      source={require("../../assets/images/NOVAheader.png")}
      resizeMode="contain"
    />
    <NovaHR color={green} />
    <TextInput value="Email Address" style={styles.input} />
    <TextInput value="Password" style={styles.input} />
    <NovaButton title="ENTER" color={red} />
    <TouchableHighlight>
      <Text style={styles.newuser}>New User? Create Account</Text>
    </TouchableHighlight>
  </View>
);

export default Login;
