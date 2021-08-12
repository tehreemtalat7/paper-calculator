import React from "react";
import { StyleSheet, View } from "react-native";
import SliderRow from "../components/SliderRow";
import Dimens from "../constants/dimens";

const BottomSection = ({
  lengthSliderValue,
  widthSliderValue,
  grammageSliderValue,
  updateCustomSizeTag,
  updateCustomFormatTag,
}) => {
  const sliders = [
    {
      title: "Grammage",
      initialValue: grammageSliderValue,
      unit: "g",
    },
    {
      title: "Length",
      initialValue: lengthSliderValue,
      unit: "mm",
    },
    {
      title: "Width",
      initialValue: widthSliderValue,
      unit: "mm",
    },
  ];

  const updateSliderValue = (slider, value) => {
    // console.log("Slider update called: ", slider, value);
    if (slider === sliders[0].title) {
      updateCustomFormatTag(value);
    } else {
      updateCustomSizeTag(slider.toLowerCase(), value);
    }
  };

  return (
    <View style={styles.container}>
      {sliders.map((slider, index) => (
        <SliderRow
          key={index}
          unit={slider.unit}
          sliderTitle={slider.title}
          sliderValue={slider.initialValue}
          updateSliderValue={updateSliderValue}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 276,
    marginHorizontal: 25,
    marginTop: 15,
    padding: Dimens.normalPadding,
    borderRadius: Dimens.borderRadius,
    backgroundColor: "#3A4163",
  },
});

export default BottomSection;
