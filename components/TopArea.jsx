import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import ImageButton from "./ImageButton";
import Images from "../constants/images";
import Colors from "../constants/colors";

const TopArea = ({ numberOfSheets, weight, updateNumberOfSheets }) => {
  const handleSubtract = () => {
    if (numberOfSheets <= 1) {
      return;
    }
    updateNumberOfSheets(numberOfSheets - 1);
  };

  const handleAdd = () => {
    if (numberOfSheets >= 999) {
      return;
    }
    updateNumberOfSheets(numberOfSheets + 1);
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
              onChangeText={(value) => updateNumberOfSheets(value)}
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
        <Text style={styles.totalWeight}>{weight}</Text>
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
    backgroundColor: Colors.primaryDark,
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
    backgroundColor: Colors.secondaryDarkOpaque,
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
    backgroundColor: Colors.primaryLight,
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
