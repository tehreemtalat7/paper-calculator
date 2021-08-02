import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ImageButton from "./ImageButton";
import Images from "../constants/images";

const TopArea = (props) => {
  const [numberOfSheets, setNumberOfSheets] = useState(1);
  const [displayImage, setDisplayImage] = useState(Images.sheets1);
  const [weight, setWeight] = useState(4.99);

  const handleSubtract = () => {
    if (numberOfSheets <= 1) {
      return;
    }
    setNumberOfSheets((currentNumber) => currentNumber - 1);
  };

  const handleAdd = () => {
    if (numberOfSheets >= 999) {
      return;
    }
    setNumberOfSheets((currentNumber) => currentNumber + 1);
  };

  useEffect(() => {
    setWeight(4.99 * numberOfSheets);
    if (numberOfSheets <= 1) setDisplayImage(Images.sheets1);
    else if (numberOfSheets >= 2 && numberOfSheets <= 10)
      setDisplayImage(Images.sheets2);
    else if (numberOfSheets > 10 && numberOfSheets <= 25)
      setDisplayImage(Images.sheets3);
    else if (numberOfSheets > 25 && numberOfSheets <= 50)
      setDisplayImage(Images.sheets4);
    else if (numberOfSheets > 50) setDisplayImage(Images.sheets5);
  }, [numberOfSheets]);

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <View style={styles.mainArea}>
          <Image style={styles.sheets} source={displayImage} />
          <View style={styles.countBox}>
            <Text style={styles.numberOfSheets}>{numberOfSheets}</Text>
            <Text style={styles.sheetsLabel}>Sheets</Text>
          </View>
          <ImageButton
            ImageStyle={styles.subtract}
            ImageSource={Images.minusIcon}
            containerStyle={styles.absolutePosition}
            onClick={handleSubtract}
          />
          <ImageButton
            ImageStyle={styles.add}
            ImageSource={Images.addIcon}
            containerStyle={styles.absolutePosition}
            onClick={handleAdd}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Per Copy</Text>
        <Text style={{ ...styles.footerText, ...styles.totalWeight }}>
          {weight.toFixed(2)}
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
  mainArea: {
    flexDirection: "row",
  },
  sheets: {
    marginTop: 27,
    marginLeft: 16,
  },
  countBox: {
    height: 74,
    width: 74,
    backgroundColor: "#4A5171",
    position: "absolute",
    marginTop: 48,
    marginLeft: 231,
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
  add: {
    marginLeft: 258,
    marginTop: 38,
  },
  subtract: {
    marginLeft: 258,
    marginTop: 111,
    height: 20,
    width: 20,
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
  footerText: {
    color: "white",
  },
  totalWeight: {
    fontWeight: "bold",
    fontSize: 18,
  },
  absolutePosition: {
    position: "absolute",
  },
});

export default TopArea;
