import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";

const UserProfile = ({ userInfo }) => (
  <View>
    <ScrollView>
      <Image
        style={{ width: 350, height: 240 }}
        source={{ uri: userInfo.image }}
      />
      <Text style={styles.h1}>{userInfo.name}</Text>
      <View style={{ padding: 18 }}>
        <Text style={styles.h2}>{userInfo.title}</Text>
        <View style={styles.viewbox}>
          <Text style={styles.h3}>{userInfo.quote}</Text>
        </View>
        <View style={styles.viewbox}>
          <Text style={styles.headline}>Biography</Text>
          <Text style={styles.text}>{userInfo.bio}</Text>
        </View>
        <View style={styles.viewbox}>
          <Text style={styles.headline}>Education</Text>
          <Text style={styles.text}>{userInfo.education}</Text>
        </View>
        <View style={styles.viewbox}>
          <Text style={styles.headline}>Global Goals</Text>
          <Text style={styles.text}>{userInfo.global}</Text>
        </View>
        <View style={styles.viewbox}>
          <Text style={styles.headline}>Projects</Text>
          <Text style={styles.text}>{userInfo.projects}</Text>
        </View>
        <View style={styles.viewbox}>
          <Text style={styles.headline}>References</Text>
          <Text style={styles.text}>{userInfo.references}</Text>
        </View>
      </View>
    </ScrollView>
  </View>
);

UserProfile.propTypes = {
  userInfo: PropTypes.object.isRequired
};

export default UserProfile;
