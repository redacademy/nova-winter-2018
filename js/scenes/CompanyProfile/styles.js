import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";
const { red } = colors;

export const styles = StyleSheet.create({
  headerContainer: {
    height: 128
  },

  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: red,
    padding: 16
  },

  logo: {
    width: 96,
    height: 96,
    borderRadius: 8,
    marginRight: 16
  },

  companyName: {
    textAlign: "left"
  },

  titleContainer: {
    flex: 1,
    flexDirection: "column"
  },

  projectTitle: {
    textAlign: "left"
  },

  backgroundImage: {
    flex: 1
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 48,
    paddingBottom: 48
  },

  category: {
    color: red,
    fontWeight: "bold",
    fontSize: 20,
    margin: 16
  },

  description: {
    margin: 16
  },

  brief: {
    width: 96,
    marginLeft: 16
  }
});
