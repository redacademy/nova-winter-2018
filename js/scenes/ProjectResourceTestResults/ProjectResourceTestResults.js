import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../config/styles";
import { styles } from "./styles";
import PropTypes from "prop-types";
import { buttonToScene } from "../../navigation/NavigationHelper";
// import Nova UI components:
import NovaButton from "../../components/UI/NovaButton";
import NovaH1 from "../../components/UI/NovaH1";
const { red } = colors;

const ProjectResourceTestResults = ({ score }) =>
  score * 10 > 5 ? (
    <View style={styles.container}>
      <NovaH1 title="Test Results" color={red} />
      <Text style={styles.message}>
        Congratulations you qualify to start our project. Good luck!{" "}
      </Text>
      <Text style={styles.score}>{score * 10}/10</Text>

      <NovaButton title="CONTINUE" color={red} onPressParams={{ currentNavigatorUID: "devRoutes", targetScene: "projectBrief", props: { success: true, id: "blockchain", company: "deloitte" } }}
        onPressFunc={buttonToScene}
      />
    </View>
  ) : (
      <View style={styles.container}>
        <NovaH1 title="Test Results" color={red} />
        <Text style={styles.message}>
          Sorry, better luck next time. Try again later.
      </Text>
        <Text style={styles.score}>{score * 10}/10</Text>
        <NovaButton title="BACK TO BRIEF" color={red} onPressParams={{ currentNavigatorUID: "devRoutes", targetScene: "projectBrief", props: { success: false, id: "blockchain", company: "deloitte" } }}
          onPressFunc={buttonToScene} />
      </View>
    );
ProjectResourceTestResults.propTypes = {
  score: PropTypes.number.isRequired,

};

ProjectResourceTestResults.defaultProps = {
  score: 0
};

export default ProjectResourceTestResults;
