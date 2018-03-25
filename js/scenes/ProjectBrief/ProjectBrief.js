import React from "react";
import { ScrollView, Text, FlatList, View, Image, ImageBackground, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { colors } from "../../config/styles";
import Icon from "react-native-vector-icons/Ionicons";
import moment from 'moment';

// import Nova UI components:
import { styles } from "./styles"
import NovaH2 from "../../components/UI/NovaH2";

import NovaButton from "../../components/UI/NovaButton";
import RNMomentCountDown from 'react-native-moment-countdown';

const { red, green } = colors;


const ProjectBrief = ({ title, brief, deliverables, logo, dueDate, image, hours, success }) => {
  let dateInFuture = null;
  if (dueDate) {
    dateInFuture = moment(dueDate.toString(), 'YYYY-MM-DD');
  }
  let companyLogo = null
  if (logo) {
    companyLogo = logo
  }
  let companyImage = "https://firebasestorage.googleapis.com/v0/b/nova-2018.appspot.com/o/UIProf_Featured.jpg?alt=media&token=24dc7e55-1c23-4454-b0d4-eb468f55a4d0"
  if (image) {
    companyImage = image
  }



  console.log(">>>>>>>", typeof companyImage)
  console.log("*******", companyImage)
  return (

    < ScrollView >

      <ImageBackground style={styles.backgroundImage}
        source={companyImage && { uri: companyImage }}>

        <View style={styles.overlay}><Image style={styles.logo}
          source={{ uri: companyLogo }} /><View style={styles.titleContainer}><Text
            style={styles.title}>{title}</Text></View></View>
      </ImageBackground >
      <View style={styles.countdown}><Text style={styles.number} >
        {dateInFuture &&
          <RNMomentCountDown toDate={dateInFuture} targetFormatMask='DD' />}</Text><Text style={styles.days}>Days Left</Text><Icon name="ios-clock-outline" size={40} color="#FFFFFF" style={styles.clock} /><Text style={styles.hours} >{hours}</Text><Text style={styles.days}>Hour Limit</Text>

      </View>

      {success.success === true &&
        <NovaButton color={green} title="START PROJECT" />
      }

      <NovaH2 color={red} title="Project Brief" style={StyleSheet.flatten(styles.header)} />

      <Text style={styles.brief}>{brief}</Text>

      <NovaH2 color={red} title="Deliverables" style={StyleSheet.flatten(styles.header)} />
      <FlatList
        data={deliverables}
        keyExtractor={item => item.description}
        renderItem={({ item }) => (
          <View style={styles.delContainer}><View ><Text style={styles.delPoint}>•</Text></View><View style={styles.delMessageContainer}><Text style={styles.delMessage}>{item.description}</Text></View></View>)} />
      <NovaH2 color={red} title="Submission" style={StyleSheet.flatten(styles.header)} />
      <View><Text style={styles.brief}>You will only receive one attempt at handling the company project. This meaning that you are only able to submit one completed project.
      </Text>
        <Text style={styles.brief}>The process of submitting work involves you to attach the required deliverables to the sharable folder that allows recruiters to access your work anywhere at anytime for review. </Text></View>
      <NovaH2 color={red} title="Resources & Test" style={StyleSheet.flatten(styles.header)} />
      <View><Text style={styles.brief}>You will be taken to a set of resources created by TAoT that will help you with the project/challenge you are going to attempt.The resources must be completed in sequence and will then lead you to a test on the material of the resources.</Text></View>
      <NovaButton color={green} title="RESOURCES" />
    </ScrollView >
  );
}
ProjectBrief.propTypes = {
  title: PropTypes.string,
  brief: PropTypes.string,
  deliverables: PropTypes.array,
  logo: PropTypes.string,
  dueDate: PropTypes.string,
  image: PropTypes.string,
  hours: PropTypes.string,
  success: PropTypes.object.isRequired
};
ProjectBrief.defaultProps = {
  title: "",
  brief: "",
  deliverables: [],
  dueDate: "",
  image: "",
  hours: "",
  logo: "",
};

export default ProjectBrief;
