import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageButton from "./ImageButton";
import Images from "../constants/images";

const Navbar = (props) => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.heading}>{props.headerText}</Text>
      <ImageButton ImageStyle={styles.menuIcon} ImageSource={Images.menuIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    height: 120,
    width: "100%",
    flexDirection: "row",
    paddingTop: 61,
    paddingHorizontal: 40,
    justifyContent: "space-between",
  },
  heading: {
    height: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  menuIcon: {
    height: 13,
    width: 20,
  },
});

export default Navbar;
