import React from "react";
import { ScrollView, Text, View, TextInput, Image } from "react-native";
import { styles } from "./styles";
import { colors, typography } from "../../config/styles.js";
import PropTypes from "prop-types";
import NovaButton from "../../components/UI/NovaButton/";
import NovaImperative from "../../components/UI/NovaImperative";
const { fontMain } = typography;
const { nearBlack } = colors;
let nameCheck = true;
let bioCheck = true;
let expCheck = true;
let eduCheck = true;
let gloCheck = true;
let quoCheck = true;
let refCheck = true;
let imgCheck = true;
let titCheck = true;
let proCheck = true;

const UserProfileCreate = ({
  handleChangeProjects,
  handleChangeBio,
  handleChangeExperience,
  handleChangeEducation,
  handleChangeGlobal,
  handleChangeName,
  handleChangeQuote,
  handleChangeReferences,
  handleChangeImage,
  handleChangeTitle,
  handleSubmit,
  bio,
  experience,
  education,
  global,
  name,
  quote,
  references,
  image,
  title
}) => (
  <ScrollView>
    <View>
      <NovaImperative color="black" title="Create Your Profile" />
      <Text style={styles.header}>Your full name</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Your name"
          value={name}
          multiline={true}
          numberOfLines={1}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChange={text => {
            handleChangeName(text);
            nameCheck = false;
          }}
        />
        {nameCheck ? (
          <Text style={{ color: "red" }}> Required </Text>
        ) : (
          <Text style={{ color: "green" }}>Completed</Text>
        )}
      </View>
      <Text style={styles.header}>Your tag-line</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="A quote, comment, or motto."
          value={quote}
          multiline={true}
          numberOfLines={2}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChange={text => {
            handleChangeQuote(text);
            quoCheck = false;
          }}
        />
        {quoCheck ? (
          <Text style={{ color: "red" }}> Required </Text>
        ) : (
          <Text style={{ color: "green" }}>Completed</Text>
        )}
      </View>
      <Text style={styles.header}>Your Degree</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Where did you graduate from?"
          multiline={true}
          numberOfLines={2}
          value={title}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChange={text => {
            handleChangeTitle(text);
            titCheck = false;
          }}
        />
        {titCheck ? (
          <Text style={{ color: "red" }}> Required </Text>
        ) : (
          <Text style={{ color: "green" }}>Completed</Text>
        )}
      </View>
      <Text style={styles.header}>Biography</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Tell the recruiters a little bit about yourself… "
          multiline={true}
          title={bio}
          numberOfLines={4}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChange={text => {
            handleChangeBio(text);
            bioCheck = false;
          }}
        />
        {bioCheck ? (
          <Text style={{ color: "red" }}> Required </Text>
        ) : (
          <Text style={{ color: "green" }}>Completed</Text>
        )}
      </View>
      <Text style={styles.header}>Work Experience</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Let them know about some of your past work
experience (i.e Company name, how long did
you work there, what did you do?)"
          multiline={true}
          value={experience}
          numberOfLines={4}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChange={text => {
            handleChangeExperience(text);
            expCheck = false;
          }}
        />
        {expCheck ? (
          <Text style={{ color: "red" }}> Required </Text>
        ) : (
          <Text style={{ color: "green" }}>Completed</Text>
        )}
      </View>
      <Text style={styles.header}>Education</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Where did you attend school? Any credible
certfications? What field did you study?"
          multiline={true}
          value={education}
          numberOfLines={4}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChange={text => {
            handleChangeEducation(text);
            eduCheck = false;
          }}
        />
        {eduCheck ? (
          <Text style={{ color: "red" }}> Required </Text>
        ) : (
          <Text style={{ color: "green" }}>Completed</Text>
        )}
      </View>
      <Text style={styles.header}>Projects</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="What are some projects you have worked on?"
          multiline={true}
          value={education}
          numberOfLines={4}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChange={e => {
            handleChangeProjects(e.nativeEvent.text);
            proCheck = false;
          }}
        />
        {proCheck ? (
          <Text style={{ color: "red" }}> Required </Text>
        ) : (
          <Text style={{ color: "green" }}>Completed</Text>
        )}
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
          value={global}
          placeholderTextColor={nearBlack}
          onChange={text => {
            handleChangeGlobal(text);     
            gloCheck = false;

          }}
        />
        {gloCheck ? (
          <Text style={{ color: "red" }}> Required </Text>
        ) : (
          <Text style={{ color: "green" }}>Completed</Text>
        )}
      </View>
      <Text style={styles.header}>References</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="List your primary references here, with email address."
          multiline={true}
          numberOfLines={4}
          value={references}
          style={styles.input}
          placeholderTextColor={nearBlack}

          onChange={text => {
            handleChangeReferences(text);

            refCheck = false;

          }}
        />
        {refCheck ? (
          <Text style={{ color: "red" }}> Required </Text>
        ) : (
          <Text style={{ color: "green" }}>Completed</Text>
        )}
      </View>
      <Text style={styles.header}>Image</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Paste a link to an image here."
          multiline={true}
          numberOfLines={1}
          value={image}
          style={styles.input}
          placeholderTextColor={nearBlack}
          onChange={text => {
            handleChangeImage(text);
            imgCheck = false;
          }}
        />
        {imgCheck ? (
          <Text style={{ color: "red" }}> Required </Text>
        ) : (
          <Text style={{ color: "green" }}>Completed</Text>
        )}
      </View>
    </View>
    <NovaButton title="CONTINUE" color="black" onPressFunc={handleSubmit} />
  </ScrollView>
);

UserProfileCreate.defaultProps = {
  userID: "",
  bio: "",
  experience: "",
  education: "",
  global: "",
  name: "",
  projects: "",
  quote: "",
  references: "",
  image: "http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg",
  title: ""
};
UserProfileCreate.propTypes = {
  userID: PropTypes.string,
  handleChangeBio: PropTypes.func.isRequired,
  handleChangeExperience: PropTypes.func.isRequired,
  handleChangeEducation: PropTypes.func.isRequired,
  handleChangeGlobal: PropTypes.func.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeProjects: PropTypes.func.isRequired,
  handleChangeQuote: PropTypes.func.isRequired,
  handleChangeReferences: PropTypes.func.isRequired,
  handleChangeImage: PropTypes.func,
  handleChangeTitle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  bio: PropTypes.string,
  experience: PropTypes.string,
  education: PropTypes.string,
  global: PropTypes.string,
  name: PropTypes.string,
  projects: PropTypes.string,
  quote: PropTypes.string,
  references: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string
};

export default UserProfileCreate;
