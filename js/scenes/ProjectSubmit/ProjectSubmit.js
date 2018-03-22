import React from "react";
import { View } from "react-native";
import TimerCountdown from "react-native-timer-countdown";
import { colors } from "../../config/styles";
import NovaH2 from "../../components/UI/NovaH2";
import NovaButton from "../../components/UI/NovaButton";
import { writeProjectOutOfTime } from "../../api/projectHelper";
import PropTypes from "prop-types";
const { green, red } = colors;

const ProjectSubmit = ({ userID }) => (
  <View>
    <NovaH2 color={red} title="Time Remaining" />
    <View>
      <TimerCountdown
        initialSecondsRemaining={16000}
        onTimeElapsed={() => writeProjectOutOfTime(userID, "photoshop")}
        allowFontScaling={true}
        style={{ fontSize: 30 }}
      />
    </View>
    <NovaButton title="FINISH" color={green} onPress={null} />
  </View>
);

ProjectSubmit.propTypes = {
  userID: PropTypes.string
};

ProjectSubmit.defaultProps = {
  userID: ""
};
export default ProjectSubmit;
