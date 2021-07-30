import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Images from "../constants/images";

const Navbar = (props) => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.heading}>{props.headerText}</Text>
      <TouchableOpacity>
        <Image style={styles.menuIcon} source={Images.menuIcon} />
      </TouchableOpacity>
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
    resizeMode: "cover",
  },
});

export default Navbar;
