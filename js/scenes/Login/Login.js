import React, { Component } from "react";

import { Text, View, TextInput, Image, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./styles";
import NovaButton from "../../components/UI/NovaButton/";

import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red } = colors;
const { fontMain } = typography;
class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ height: 90, width: 90, marginTop: 20 }}
          source={require("../../assets/images/NLogo.png")}
          resizeMode="contain"
        />
        <Image
          style={{ height: 50, width: 150, marginTop: 20 }}
          source={require("../../assets/images/NOVAheader.png")}
          resizeMode="contain"
        />

        <TextInput value="Email Address" style={styles.input} />
        <TextInput value="Password" style={styles.input} />
        <NovaButton title="enter" color={red} />
        <TouchableHighlight>
          <Text
            style={{
              color: "#ffffff",
              margin: 20,

              fontFamily: fontMain
            }}
          >
            New User? Create Account
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// LoginContainer.propTypes = {};

export default Login;
