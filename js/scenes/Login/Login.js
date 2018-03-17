import React from "react";
import { Text, View, TextInput, Image, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./styles";
import NovaButton from "../../components/UI/NovaButton/";
import NovaHR from "../../components/UI/NovaHR/";
import { colors } from "../../config/styles.js";
import { goToScene } from "../../navigation/NavigationHelper";

const { green, red } = colors;

const Login = ({
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  handleSubmit,
  logOut,
  currentUser
}) => (
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
    <TextInput
      autoCapitalize="none"
      placeholder="Email Address"
      value={email}
      style={styles.input}
      onChange={e => {
        handleChangeEmail(e.nativeEvent.text);
      }}
    />
    <TextInput
      autoCapitalize="none"
      placeholder="Password"
      vaule={password}
      style={styles.input}
      onChange={e => {
        handleChangePassword(e.nativeEvent.text);
      }}
    />
    <NovaButton
      title="ENTER"
      color={red}
      onPressParams={{ email, password }}
      onPressFunc={handleSubmit}
    />
    <TouchableHighlight
      onPress={() => {
        goToScene("devRoutes", "userAccountCreate");
      }}
    >
      <Text style={styles.newuser}>New User? Create Account</Text>
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => {
        if (currentUser) {
          logOut(currentUser);
        }
      }}
    >
      <Text>Sign Out</Text>
    </TouchableHighlight>
  </View>
);

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  currentUser: PropTypes.string
};

Login.defaultProps = {
  currentUser: ""
};

export default Login;
