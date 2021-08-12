import React from "react";
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
import Dimens from "../constants/dimens";

const Item = ({ item, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const MiddleSection = ({
  pageSizes,
  pageFormats,
  selectedSizeId,
  selectedFormatId,
  onSizeChange,
  onFormatChange,
}) => {
  const renderItem = ({ item }) => {
    const color =
      item.id === selectedSizeId ? Colors.primaryDark : Colors.tertiaryDark;
    return (
      <Item
        item={item}
        onPress={() => onSizeChange(item.id)}
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
                  onFormatChange(pageFormat.id);
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
    padding: Dimens.normalPadding,
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
    borderRadius: Dimens.borderRadius,
  },
  chipTitle: {
    fontSize: Dimens.fonts.semiNormal,
    fontFamily: "Montserrat_400Regular",
  },
  sizesContainer: {
    height: 45,
    flexDirection: "row",
    backgroundColor: Colors.tertiary,
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: Dimens.normalPadding,
    alignItems: "center",
  },
  item: {
    marginRight: 15,
  },
  title: {
    fontSize: Dimens.fonts.semiNormal,
    color: Colors.tertiaryDark,
    fontFamily: "Montserrat_400Regular",
  },
});

export default MiddleSection;
