import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import ImageButton from "./ImageButton";
import Images from "../constants/images";

const TopArea = (props) => {
  const [numberOfSheets, setNumberOfSheets] = useState(1);

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

  const sheetIcon = () => {
    let imageSource = Images.sheets1;
    if (numberOfSheets >= 2 && numberOfSheets <= 10)
      imageSource = Images.sheets2;
    else if (numberOfSheets > 10 && numberOfSheets <= 25)
      imageSource = Images.sheets3;
    else if (numberOfSheets > 25 && numberOfSheets <= 50)
      imageSource = Images.sheets4;
    else if (numberOfSheets > 50) imageSource = Images.sheets5;
    return imageSource;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.sheetContainer}>
          <Image source={sheetIcon()} />
        </View>
        <View style={styles.rightContainer}>
          <ImageButton
            containerStyle={styles.addButtonContainer}
            ImageStyle={styles.btn}
            ImageSource={Images.addIcon}
            onClick={handleAdd}
          />
          <View style={styles.countBox}>
            <TextInput
              style={styles.sheets}
              keyboardType="number-pad"
              maxLength={2}
              value={numberOfSheets.toString()}
              onChangeText={(value) => setNumberOfSheets(value)}
            />
            <Text style={styles.sheetsLabel}>Sheets</Text>
          </View>
          <ImageButton
            containerStyle={styles.subtractButtonContainer}
            ImageStyle={styles.btn}
            ImageSource={Images.minusIcon}
            onClick={handleSubtract}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.copy}>Per Copy</Text>
        <Text style={styles.totalWeight}>
          {(4.99 * numberOfSheets).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    height: 169,
    width: 355,
    backgroundColor: "#37CEFF",
    padding: 20,
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sheetContainer: {
    flex: 1,
    marginTop: 7,
    marginLeft: 16,
  },
  countBox: {
    height: 74,
    width: 74,
    backgroundColor: "#4A517120",
    position: "absolute",
    marginTop: 10,
    borderRadius: 15,
  },
  sheets: {
    fontSize: 24,
    paddingTop: 12,
    color: "white",
    textAlign: "center",
    fontFamily: "montserrat_bold",
  },
  sheetsLabel: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 18,
  },
  addButtonContainer: {
    zIndex: 1,
    marginRight: 27,
  },
  subtractButtonContainer: {
    zIndex: 1,
    marginRight: 27,
    marginTop: 54,
  },
  btn: {
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
  copy: {
    color: "white",
    fontFamily: "Montserrat_400Regular",
  },
  totalWeight: {
    fontSize: 18,
    color: "white",
    fontFamily: "montserrat_bold",
  },
});

export default TopArea;
