import React from "react";
import { ScrollView, Text, View, TextInput, Image } from "react-native";
import { styles } from "./styles";
import { colors, typography } from "../../config/styles.js";
import PropTypes from "prop-types";
import NovaButton from "../../components/UI/NovaButton/";
import NovaImperative from "../../components/UI/NovaImperative";
import {
  writeNewUserBio,
  writeNewUserExp,
  writeNewCompanyData,
  writeNewUserEducation,
  writeNewUserGlobal,
  writeNewUserName,
  writeNewUserProjects,
  writeNewUserQuote,
  writeNewUserReferences,
  writeNewUserImage,
  writeNewUserTitle
} from "../../api/firebaseHelper";
const { fontMain } = typography;
const { black, mediumGrey, nearBlack, green, red } = colors;

const UserProfileCreate = ({ userID }) => (
  <ScrollView>
    <View>
      <NovaImperative color="black" title="Create Your Profile" />
      <Text style={styles.header}>Your full name</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Your name"
          multiline={true}
          numberOfLines={1}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChangeText={text => writeNewUserName(userID, text)}
        />
      </View>
      <Text style={styles.header}>Your tag-line</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="A quote, comment, or motto."
          multiline={true}
          numberOfLines={2}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChangeText={text => writeNewUserQuote(userID, text)}
        />
      </View>
      <Text style={styles.header}>Your Degree</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Where did you graduate from?"
          multiline={true}
          numberOfLines={2}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChangeText={text => writeNewUserTitle(userID, text)}
        />
      </View>
      <Text style={styles.header}>Biography</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Tell the recruiters a little bit about yourself… "
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChangeText={text => writeNewUserBio(userID, text)}
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
          onChangeText={text => writeNewUserExp(userID, text)}
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
          onChangeText={text => writeNewUserEducation(userID, text)}
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
          onChangeText={text => writeNewUserGlobal(userID, text)}
        />
      </View>
      <Text style={styles.header}>References</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="List your primary references here, with email address."
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChangeText={text => writeNewUserReferences(userID, text)}
        />
      </View>
      <Text style={styles.header}>Image</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Paste a link to an image here."
          multiline={true}
          numberOfLines={1}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChangeText={text => writeNewUserImage(userID, text)}
        />
      </View>
    </View>
    <NovaButton title="CONTINUE" color="black" />
  </ScrollView>
);

UserProfileCreate.defaultProps = {
  userID: ""
};
UserProfileCreate.propTypes = {
  userID: PropTypes.string
};

export default UserProfileCreate;
