import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles.js";
const { black, green, red, white } = colors;
const { fontMain } = typography;
export const styles = StyleSheet.create({
  loadingMessage: {
    margin: 30,
    color: white,
    fontFamily: fontMain,
    fontSize: 20
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: black,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: black,
    alignItems: "flex-start"
  },
  card: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    width: 320
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  done: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "transparent"
  },
  inputBox: {
    flex: 1,
    flexDirection: "row"
  },
  falseInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    height: 350,
    width: 160,
    backgroundColor: red
  },
  trueInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 350,
    width: 160,
    backgroundColor: green
  },
  questionContainer: {
    height: 100,
    width: 320,
    backgroundColor: black
  },
  questionText: {
    color: white,
    fontFamily: fontMain,
    fontSize: 20,
    textAlign: "center",

    paddingTop: 20
  },
  trueText: {
    color: white,
    fontSize: 28,
    fontWeight: "bold"
  },
  icons: {
    height: 80,
    width: 80,
    margin: 30
  },
  message: {
    color: white,
    fontFamily: fontMain,
    fontSize: 18
  },
  cardContainer: {
    width: 320
  }
});
