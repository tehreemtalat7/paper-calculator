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
    id: "a1",
    title: "A2",
  },
  {
    id: "a2",
    title: "A3",
  },
  {
    id: "a3",
    title: "A4",
  },
  {
    id: "a4",
    title: "A5",
  },
  {
    id: "a5",
    title: "A6",
  },
  {
    id: "a6",
    title: "DIN LANG",
  },
];

const pageFormats = [
  {
    id: "01",
    title: "DIN A",
  },
  {
    id: "02",
    title: "DIN B",
  },
  {
    id: "03",
    title: "DIN C",
  },
  {
    id: "04",
    title: "DIN D",
  },
  {
    id: "05",
    title: "US Formate",
  },
  {
    id: "06",
    title: "JIS B",
  },
  {
    id: "07",
    title: "Custom",
  },
  {
    id: "08",
    title: "Custom",
  },
  {
    id: "09",
    title: "Custom",
  },
  {
    id: "10",
    title: "Custom",
  },
  {
    id: "11",
    title: "Custom",
  },
  {
    id: "12",
    title: "Custom",
  },
];

const Item = ({ item, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const MiddleSection = (props) => {
  const [selectedSizeId, setSelectedSizeId] = useState("a3");
  const [selectedFormatId, setSelectedFormatId] = useState("01");

  const renderItem = ({ item }) => {
    const color = item.id === selectedSizeId ? "#37CEFF" : "#B0B5CB";
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
