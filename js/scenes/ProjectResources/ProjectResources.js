import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../config/styles";
const { red } = colors;
import VideoPlayer from "react-native-video-player";
import { styles } from "./styles";

// import Nova UI components:
import NovaH2 from "../../components/UI/NovaH2";

const ProjectResources = () => (
  <View>
    <NovaH2 color={red} title="Video Lessons" />
    <Text>
      Carefully watch each video in sequence to prepare for your test.
    </Text>
    <View style={styles.videoContainer}>
      <VideoPlayer
        // https://github.com/cornedor/react-native-video-player/blob/master/example/app/index.js
        video={{
          uri:
            "https://ia801403.us.archive.org/13/items/AboutBan1935/AboutBan1935_512kb.mp4"
        }} // Can be a URL or a local file.
        videoWidth={320}
        videoHeight={240}
      />
    </View>
  </View>
);

export default ProjectResources;
