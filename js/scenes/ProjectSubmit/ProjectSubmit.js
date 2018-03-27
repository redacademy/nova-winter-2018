import React from "react";
import { View, Text, FlatList, ScrollView, TextInput } from "react-native";
import TimerCountdown from "react-native-timer-countdown";
import { colors } from "../../config/styles";
import NovaH2 from "../../components/UI/NovaH2";
import NovaButton from "../../components/UI/NovaButton";
import {
  writeProjectOutOfTime,
  writeProjectToDatabase
} from "../../api/projectHelper";
import PropTypes from "prop-types";
import { styles } from "./styles.js";
const { red } = colors;

const ProjectSubmit = ({
  companyName,
  projectName,
  deliverables,
  userEmail
}) => (
  <View style={styles.view}>
    <ScrollView>
      <Text style={styles.header1}>{companyName}</Text>
      <Text style={styles.header}>{projectName}</Text>
      <NovaH2 color={red} title="Time Remaining" />
      <View style={styles.timer}>
        <TimerCountdown
          initialSecondsRemaining={16000}
          onTimeElapsed={() =>
            writeProjectOutOfTime(companyName, projectName, userEmail)
          }
          allowFontScaling={true}
          style={{ fontSize: 30 }}
        />
      </View>
      <Text style={styles.header}> Deliverables </Text>
      <FlatList
        data={deliverables}
        keyExtractor={item => item.description}
        renderItem={({ item }) => (
          <View style={styles.deliverables}>
            <Text>{item.description}</Text>
          </View>
        )}
      />
      <TextInput
        placeholder="Paste the link you your project here"
        multiline={true}
        numberOfLines={4}
        style={styles.input}
        placeholderTextColor="black"
        onChange={e => {
          writeProjectToDatabase(
            companyName,
            projectName,
            userEmail,
            e.nativeEvent.text
          );
        }}
      />
      <NovaButton title="ENTER SUBMISSION" color={red} onPressFunc={null} />
    </ScrollView>
  </View>
);

ProjectSubmit.propTypes = {
  companyName: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userID: PropTypes.string,
  deliverables: PropTypes.array
};

ProjectSubmit.defaultProps = {
  userID: "",
  deliverables: []
};
export default ProjectSubmit;
