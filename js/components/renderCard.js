import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../scenes/ProjectResourceTest/styles";



export const renderCard = card => (

  <View style={styles.cardContainer}>
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{card}</Text>
    </View>
    <View style={styles.inputBox}>
      <View style={styles.trueInput}>
        <Text style={styles.trueText}>YES</Text>
        <Image
          style={styles.icons}
          source={require("../assets/icons/rightswipey.png")}
          resizeMode="contain"
        />
        <Text style={styles.message}>Swipe Right</Text>
      </View>
      <View style={styles.falseInput}>
        <Text style={styles.trueText}>NO</Text>
        <Image
          style={styles.icons}
          source={require("../assets/icons/leftswipey.png")}
          resizeMode="contain"
        />
        <Text style={styles.message}>Swipe Left</Text>
      </View>
    </View>
  </View>

);