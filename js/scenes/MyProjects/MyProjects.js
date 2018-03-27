import React from "react";
import { Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import { colors, colorShadow } from "../../config/styles";

// import Nova UI components:
import NovaH2 from "../../components/UI/NovaH2";
import NovaButton from "../../components/UI/NovaButton";

const { red } = colors;

const MyProjects = () => (
  <View>
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={colorShadow}>
          <Image
            style={styles.logo}
            source={{
              uri:
                "https://firebasestorage.googleapis.com/v0/b/nova-2018.appspot.com/o/company-logos%2Fcompany-logo-deloitte.png?alt=media&token=e1fa5bfb-9316-400a-bc43-d02267907f64"
            }}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.campaign}>Create a Campaign</Text>
          <View>
            <Text style={{ color: "black" }}>Time: 2 Hours</Text>
            <Text style={{ color: "black" }}>Open: 22 Days Left</Text>
          </View>
        </View>
        <Icon name="ios-arrow-dropright-outline" size={32} color="#000" />
      </View>
    </View>
  </View>
);

// MyProjects.propTypes = {};

export default MyProjects;
