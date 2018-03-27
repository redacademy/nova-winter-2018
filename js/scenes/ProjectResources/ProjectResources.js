import React from "react";
import {
  FlatList,
  ImageBackground,
  Text,
  View,
  ScrollView
} from "react-native";
import PropTypes from "prop-types";
import VideoPlayer from "react-native-video-player";
import Icon from "react-native-vector-icons/Ionicons";

// import Redux
import { connect } from "react-redux";
import { setResourceProgress } from "../../redux/modules/userReducer";

// import styles
import { colors, shadow } from "../../config/styles";
import { styles } from "./styles";

// import Nova UI components:
import NovaH2 from "../../components/UI/NovaH2";
import NovaButton from "../../components/UI/NovaButton/";
import { buttonToScene } from "../../navigation/NavigationHelper";

const { red, green, mediumGrey } = colors;

const ProjectResources = ({
  userID,
  resources,
  companyID,
  projectID,
  progress,
  dispatch
}) => {
  return (
    <ScrollView>
      <NovaH2 color={red} title="Video Lessons" />
      <Text style={styles.copy}>
        Carefully watch each video in sequence to prepare for your test.
      </Text>

      <FlatList
        data={resources.slice(0, progress + 1)}
        keyExtractor={item => item.url}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.resourceTitle}>Lesson #{item.index}</Text>
            <View style={[styles.videoContainer, shadow]}>
              <VideoPlayer
                video={{ uri: item.url }}
                videoWidth={320}
                videoHeight={240}
                thumbnail={{ uri: item.thumbnail }}
                onEnd={() => {
                  dispatch(
                    setResourceProgress(
                      userID,
                      companyID,
                      projectID,
                      item.index
                    )
                  );
                }}
              />
            </View>
          </View>
        )}
      />

      <FlatList
        data={resources.slice(progress + 1)}
        keyExtractor={item => item.url}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.resourceTitle}>Lesson #{item.index}</Text>
            <View style={[styles.videoContainer, shadow]}>
              <ImageBackground
                style={[styles.lockedVideoPlaceholder, shadow]}
                source={{ uri: item.thumbnail }}
              >
                <View style={styles.overlay}>
                  <Icon name="ios-lock" size={40} color="white" />
                </View>
              </ImageBackground>
            </View>
          </View>
        )}
      />

      {progress >= resources.length ? (
        <NovaButton
          title="BEGIN TEST"
          color={green}
          onPressParams={{
            currentNavigatorUID: "companies",
            targetScene: "projectResourceTest",
            props: {
              company: companyID,
              project: projectID
            }
          }}
          onPressFunc={buttonToScene}
        />
      ) : (
        <NovaButton title="BEGIN TEST" color={mediumGrey} />
      )}
    </ScrollView>
  );
};

ProjectResources.propTypes = {
  userID: PropTypes.string.isRequired,
  resources: PropTypes.array.isRequired,
  companyID: PropTypes.string.isRequired,
  projectID: PropTypes.string.isRequired,
  progress: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

ProjectResources.defaultProps = {
  progress: 0
};

export default connect()(ProjectResources);
