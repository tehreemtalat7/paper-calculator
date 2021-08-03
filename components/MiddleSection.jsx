import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

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

const Item = ({ item, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const MiddleSection = (props) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const color = item.id === selectedId ? "#37CEFF" : "#B0B5CB";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.formatSection}></View>
      <View style={styles.sizesContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          data={pageSizes}
          horizontal={true}
          extraData={selectedId}
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
    backgroundColor: "#F8F9FB",
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
  },
  sizesContainer: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "#EFF0F5",
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
    color: "#B0B5CB",
  },
});

export default MiddleSection;
