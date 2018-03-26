import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { colors } from "../../config/styles";
import NovaH1 from "../../components/UI/NovaH1";
import NovaButton from "../../components/UI/NovaButton";
import { styles } from "./styles.js";
import Icon from "react-native-vector-icons/Ionicons";
const { red } = colors;
const ProjectSubmitConfirm = () => (
  <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("../../assets/images/greencheck.png")}
        resizeMode="contain"
      />
      <NovaH1 color={red} title="Congratulations" />
      <Text style={styles.message}>
        {"Your project has been submitted for review."}
      </Text>
      <NovaButton title="CONTINUE" color={red} onPress={null} />
    </View>
    <View style={styles.container}>
      <Icon name={"ios-close-circle"} size={96} color={red} />
      <NovaH1 color={red} title="Time is up!" />
      <Text style={styles.message}>
        {
          "Thank you for participating. Looks like you weren’t able to submit your deliverables on time."
        }
      </Text>
      <NovaButton title="BACK TO BRIEF" color={red} onPress={null} />
    </View>
  </ScrollView>
);

export default ProjectSubmitConfirm;
