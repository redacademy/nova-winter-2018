import { Dimensions, StyleSheet } from "react-native";
import { typography, colors } from "../../config/styles";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25
  },
  scrollContainer: {
    flex: 0,
    justifyContent: "space-between"
  },
  searchInputContainer: {
    flex: 0,
    alignItems: "center",
    marginTop: 10,
    padding: 20
  },
  filterText: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: typography.fontMain,
    color: colors.darkGrey
  },
  searchBar: {
    backgroundColor: colors.mediumGrey,
    marginBottom: 15,
    borderRadius: 10,
    padding: 10
  },
  searchResults: {
    height: height / 1.75
  },
  closeFilter: {
    fontSize: 30,
    color: colors.red,
    textAlign: "center"
  },
  horizontalRule: {
    width: 300,
    height: 2,
    backgroundColor: colors.mediumGrey,
    marginVertical: 20,
    alignSelf: "center"
  }
});
