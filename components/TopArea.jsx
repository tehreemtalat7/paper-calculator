import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import Images from "../constants/images";

const TopArea = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <View style={styles.mainArea}>
          <Image style={styles.sheets} source={Images.sheets} />
          <View style={styles.buttons}>
            <Image style={styles.add} source={Images.addIcon} />
            <Image style={styles.minus} source={Images.minusIcon} />
          </View>
          <View style={styles.countContainer}>
            <Text style={styles.numberOfSheets}>3</Text>
            <Text style={styles.sheetsLabel}>Sheets</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Per Copy</Text>
        <Text style={{ ...styles.footerText, ...styles.totalWeight }}>
          4.99
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  topBox: {
    height: 229,
    width: 355,
    backgroundColor: "#37CEFF",
    padding: 20,
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
  },
  footer: {
    width: 355,
    height: 60,
    backgroundColor: "#6FDBFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
  },
  totalWeight: {
    fontWeight: "bold",
    fontSize: 18,
  },
  footerText: {
    color: "white",
  },
  mainArea: {
    flexDirection: "row",
  },
  sheets: {
    marginTop: 27,
    marginLeft: 36,
  },
  countContainer: {
    marginRight: 20,
    marginTop: 48,
    height: 74,
    width: 74,
    backgroundColor: "#4A5171",
    borderRadius: 15,
  },
  numberOfSheets: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    paddingTop: 12,
    color: "white",
  },
  sheetsLabel: {
    color: "white",
    textAlign: "center",
    fontSize: 10,
  },
  buttons: {
    marginTop: 38,
  },
  add: {
    marginLeft: 30,
  },
  minus: {
    marginLeft: 30,
    marginTop: 50,
  },
});

export default TopArea;
