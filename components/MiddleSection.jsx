import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Chip } from "react-native-elements";
import Colors from "../constants/colors";

const pageSizes = [
  {
    id: "a2",
    title: "A2",
    length: 494,
    width: 320,
  },
  {
    id: "a3",
    title: "A3",
    length: 420,
    width: 297,
  },
  {
    id: "a4",
    title: "A4",
    length: 297,
    width: 210,
  },
  {
    id: "a5",
    title: "A5",
    length: 210,
    width: 148,
  },
  {
    id: "a6",
    title: "A6",
    length: 148,
    width: 105,
  },
  {
    id: "a7",
    title: "DIN LANG",
    length: 320,
    width: 281,
  },
];

const pageFormats = [
  {
    id: "01",
    title: "DIN A",
    grammage: 10,
  },
  {
    id: "02",
    title: "DIN B",
    grammage: 15,
  },
  {
    id: "03",
    title: "DIN C",
    grammage: 500,
  },
  {
    id: "04",
    title: "DIN D",
    grammage: 60,
  },
  {
    id: "05",
    title: "US Formate",
    grammage: 100,
  },
  {
    id: "06",
    title: "JIS B",
    grammage: 670,
  },
  {
    id: "07",
    title: "Custom",
    grammage: 10,
  },
];

const Item = ({ item, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const MiddleSection = (props) => {
  const [selectedSizeId, setSelectedSizeId] = useState("a4");
  const [selectedFormatId, setSelectedFormatId] = useState("01");

  const renderItem = ({ item }) => {
    const color =
      item.id === selectedSizeId ? Colors.primaryDark : Colors.tertiaryDark;
    return (
      <Item
        item={item}
        onPress={() => setSelectedSizeId(item.id)}
        textColor={{ color }}
      />
    );
  };

  const chipBackground = (format) => {
    const color =
      format.id === selectedFormatId ? Colors.tertiaryDark : "white";
    return { backgroundColor: color };
  };

  const chipTitleColor = (format) => {
    const color =
      format.id === selectedFormatId ? "white" : Colors.tertiaryDark;
    return { color: color };
  };

  return (
    <View style={styles.container}>
      <View style={styles.formatSection}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {pageFormats.map((pageFormat) => (
              <Chip
                key={pageFormat.id}
                title={pageFormat.title}
                buttonStyle={{ ...styles.chip, ...chipBackground(pageFormat) }}
                titleStyle={{
                  ...styles.chipTitle,
                  ...chipTitleColor(pageFormat),
                }}
                onPress={() => {
                  setSelectedFormatId(pageFormat.id);
                }}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.sizesContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          data={pageSizes}
          horizontal={true}
          extraData={selectedSizeId}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 15,
    borderColor: "black",
  },
  formatSection: {
    height: 110,
    padding: 20,
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: Colors.tertiaryLight,
    flexDirection: "row",
  },
  formatScroll: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    height: 30,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  chipTitle: {
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
  sizesContainer: {
    height: 45,
    flexDirection: "row",
    backgroundColor: Colors.tertiary,
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  item: {
    marginRight: 15,
  },
  title: {
    fontSize: 12,
    color: Colors.tertiaryDark,
    fontFamily: "Montserrat_400Regular",
  },
});

export default MiddleSection;
