import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  View,
  ScrollView
} from "react-native";
import PropTypes from "prop-types";
import { styles } from "./styles";
import { colors, shadow } from "../../config/styles";
const { green } = colors;

// import Nova UI components:
import NovaH2 from "../../components/UI/NovaH2";
import NovaButton from "../../components/UI/NovaButton";

const CompanyProfile = companyInfo => (
  <ScrollView>
    <View style={[styles.headerContainer, shadow]}>
      <View style={styles.header}>
        <View style={shadow}>
          <Image
            style={styles.logo}
            source={{ uri: companyInfo.companyInfo.logo }}
          />
        </View>
        <View style={styles.titleContainer}>
          <NovaH2
            color="white"
            title={companyInfo.companyInfo.name}
            style={[styles.companyName, shadow]}
          />
          <Text style={[{ color: "white" }, shadow]}>
            {companyInfo.companyInfo.industry}
          </Text>
        </View>
      </View>
    </View>

    <View>
      <FlatList
        data={companyInfo.projects}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.category}>{item.industry} Project</Text>
            <ImageBackground
              style={styles.backgroundImage}
              source={{ uri: item.image }}
            >
              <View style={styles.overlay}>
                <NovaButton
                  title="Brief"
                  color={green}
                  style={[styles.brief, shadow]}
                />
                <NovaH2
                  color="white"
                  style={[shadow, styles.projectTitle]}
                  title={item.title}
                />
              </View>
            </ImageBackground>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  </ScrollView>
);

CompanyProfile.propTypes = {
  companyInfo: PropTypes.object.isRequired
};

export default CompanyProfile;
