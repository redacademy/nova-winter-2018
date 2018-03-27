import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles.js";
const { white, red } = colors;
const { fontMain } = typography;
export const styles = StyleSheet.create({
  header: {
    textAlign: "left",
    padding: 10,
    paddingLeft: 20
  },
  brief: {
    fontFamily: fontMain,
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 24,
    fontSize: 14
  },
  delContainer: {
    flex: 1,
    flexDirection: "row"
  },
  delPoint: {
    paddingLeft: 20,
    color: red,
    paddingRight: 10,
    fontSize: 24,
    top: -2
  },
  delMessage: {
    fontFamily: fontMain,
    fontSize: 14,
    lineHeight: 30
  },
  delMessageContainer: {
    width: 250
  },
  logo: {
    height: 75,
    width: 75,
    borderRadius: 3
  },
  backgroundImage: {
    flex: 1
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 48,
    paddingBottom: 48
  },
  title: {
    fontFamily: fontMain,
    fontSize: 30,
    color: white,
    paddingLeft: 20
  },
  titleContainer: {
    maxWidth: 200
  },
  countdown: {
    flex: 1,
    flexDirection: "row",

    backgroundColor: red
  },
  number: {
    fontSize: 20,
    color: white,
    fontFamily: fontMain,
    paddingLeft: 20,
    paddingTop: 7,
    paddingBottom: 5
  },
  days: {
    fontSize: 20,
    color: white,
    paddingLeft: 5,
    fontFamily: fontMain,
    paddingTop: 7,
    paddingBottom: 5
  },
  clock: {
    paddingLeft: 10,
    paddingRight: 10
  },
  hours: {
    fontSize: 20,
    color: white,
    paddingLeft: 5,
    fontFamily: fontMain,
    paddingTop: 7,
    paddingBottom: 5
  }
});
