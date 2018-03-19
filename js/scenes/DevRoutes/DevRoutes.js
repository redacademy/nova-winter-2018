import React from "react";
import { ScrollView, Text } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./styles";
import { goToScene } from "../../navigation/NavigationHelper";

const DevRoutes = () => (
  <ScrollView>
    <Text style={{ fontWeight: "bold", marginTop: 16, color: "red" }}>
      All links here push onto this devRoutes stack. Stacks indicated below
      document where these Scenes will be pushed in production.
    </Text>

    <Text style={{ fontWeight: "bold", marginTop: 16 }}>Companies stack:</Text>
    <Text onPress={() => goToScene("devRoutes", "companyProfile")}>
      CompanyProfile
    </Text>
    <Text onPress={() => goToScene("devRoutes", "projectBrief")}>
      ProjectBrief
    </Text>
    <Text onPress={() => goToScene("devRoutes", "projectConfirm")}>
      ProjectConfirm
    </Text>
    <Text onPress={() => goToScene("devRoutes", "projectResourceTest")}>
      ProjectResourceTest
    </Text>
    <Text onPress={() => goToScene("devRoutes", "projectResourceTestResults")}>
      ProjectResourceTestResults
    </Text>
    <Text onPress={() => goToScene("devRoutes", "projectResources")}>
      ProjectResources
    </Text>
    <Text onPress={() => goToScene("devRoutes", "projectSubmit")}>
      ProjectSubmit
    </Text>
    <Text onPress={() => goToScene("devRoutes", "projectSubmitConfirm")}>
      ProjectSubmitConfirm
    </Text>

    <Text style={{ fontWeight: "bold", marginTop: 16 }}>Root Stack:</Text>
    <Text onPress={() => goToScene("devRoutes", "login")}>Login</Text>
    <Text onPress={() => goToScene("devRoutes", "splash")}>Splash</Text>
    <Text onPress={() => goToScene("devRoutes", "userAccountConfirm")}>
      UserAccountConfirm
    </Text>
    <Text onPress={() => goToScene("devRoutes", "userAccountCreate")}>
      UserAccountCreate
    </Text>
    <Text onPress={() => goToScene("devRoutes", "userProfileCreate")}>
      UserProfileCreate
    </Text>

    <Text style={{ fontWeight: "bold", marginTop: 16 }}>
      User Profile Stack?:
    </Text>
    <Text onPress={() => goToScene("devRoutes", "userProfileEdit")}>
      UserProfileEdit
    </Text>
  </ScrollView>
);

// DevRoutes.propTypes = {};

export default DevRoutes;
