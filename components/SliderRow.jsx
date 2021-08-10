import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Slider } from "react-native-elements";
import Colors from "../constants/colors";

const SliderRow = ({ sliderTitle, sliderValue, updateSliderValue }) => {
  const [sliderLength, setSliderLength] = useState(sliderValue);

  return (
    <View style={styles.container}>
      <View style={styles.rowHead}>
        <Text style={styles.title}>{sliderTitle}</Text>
        <View style={styles.value}>
          <Text style={styles.badge}>{Math.round(sliderLength)}mm</Text>
        </View>
      </View>
      <Slider
        value={sliderValue}
        minimumValue={1}
        step={1}
        maximumValue={500}
        thumbStyle={{ width: 18, height: 18 }}
        trackStyle={{ color: Colors.primaryDark, height: 1 }}
        minimumTrackTintColor={Colors.primaryDark}
        maximumTrackTintColor="#F2F2F2"
        thumbTintColor={Colors.primaryDark}
        onValueChange={(length) => setSliderLength(length)}
        onSlidingComplete={(value) => {
          updateSliderValue(sliderTitle, value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 14,
    fontFamily: "montserrat_bold",
  },
  rowHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  value: {
    backgroundColor: Colors.secondaryDark,
    borderRadius: 10,
    height: 30,
    justifyContent: "center",
    padding: 10,
  },
  badge: {
    color: "white",
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
});

export default SliderRow;
