import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";
import NovaButton from "../../components/UI/NovaButton";
import { colors, typography } from "../../config/styles";

import { buttonToScene } from "../../navigation/NavigationHelper";
const { red, nearBlack } = colors;
const { fontMain } = typography;
const UserProfile = ({ userInfo, logoutFunc }) => {
  return (
    <View>
      {userInfo ? (
        <ScrollView>
          {userInfo.image ? (
            <Image
              style={{ width: 350, height: 240 }}
              source={{ uri: userInfo.image }}
            />
          ) : (
            <Text style={styles.placeHolder} />
          )}

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
              <Text style={styles.headline}>Experience</Text>
              <Text style={styles.text}>{userInfo.experience}</Text>
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
          <NovaButton
            title="EDIT PROFILE"
            color={red}
            onPressParams={{
              currentNavigatorUID: "userProfile",
              targetScene: "userProfileCreate"
            }}
            onPressFunc={buttonToScene}
          />
          <NovaButton
            title="LOGOUT"
            color={nearBlack}
            onPressFunc={logoutFunc}
          />
        </ScrollView>
      ) : (
        <View style={{ height: 300, padding: 30 }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: fontMain,
              padding: 30,
              fontSize: 24
            }}
          >
            Please Enter Profile Information
          </Text>
          <NovaButton
            title="EDIT PROFILE"
            color={red}
            onPressParams={{
              currentNavigatorUID: "userProfile",
              targetScene: "userProfileCreate"
            }}
            onPressFunc={buttonToScene}
          />
          <NovaButton
            title="LOGOUT"
            color={nearBlack}
            onPressFunc={logoutFunc}
          />
        </View>
      )}
    </View>
  );
};
UserProfile.propTypes = {
  userInfo: PropTypes.object,
  logoutFunc: PropTypes.func
};
export default UserProfile;
