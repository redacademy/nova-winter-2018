import React from "react";
import { ScrollView, Text, View, TextInput, Image } from "react-native";
import { styles } from "./styles";
// import Nova UI components:
import NovaButton from "../../components/UI/NovaButton/";
import NovaImperative from "../../components/UI/NovaImperative";
import { colors, typography } from "../../config/styles.js";
const { black, mediumGrey, nearBlack, green, red } = colors;
const { fontMain } = typography;

const UserProfileCreate = () => (
  <ScrollView>
    <View>
      <NovaImperative color="black" title="Create Your Profile" />
      <Text style={styles.header}>Biography</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Tell the recruiters a little bit about yourself… "
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          placeholderTextColor={nearBlack}
        />
      </View>
      <Text style={styles.header}>Work Experience</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Let them know about some of your past work
experience (i.e Company name, how long did
you work there, what did you do?)"
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          placeholderTextColor={nearBlack}
        />
      </View>
      <Text style={styles.header}>Education</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Where did you attend school? Any credible
certfications? What field did you study?"
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          placeholderTextColor={nearBlack}
        />
      </View>
      <View style={styles.global}>
        <Text style={styles.header}>Global Goals</Text>
        <View>
          <Image
            style={styles.logo}
            source={require("../../assets/images/global-goals-logo.png")}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="What causes are close to your heart?"
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          placeholderTextColor={nearBlack}
        />
      </View>
    </View>
    <NovaButton title="CONTINUE" color="black" onPress={null} />
  </ScrollView>
);

export default UserProfileCreate;
