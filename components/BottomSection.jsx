import React from "react";
import { StyleSheet, View } from "react-native";
import SliderRow from "../components/SliderRow";

const BottomSection = (props) => {
  return (
    <View style={styles.container}>
      <SliderRow sliderTitle="Length" initialSliderValue={297} />
      <SliderRow sliderTitle="Width" initialSliderValue={210} />
      <SliderRow sliderTitle="Grammage" initialSliderValue={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 276,
    marginHorizontal: 25,
    marginTop: 15,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#3A4163",
  },
});

export default BottomSection;
