import React from "react";
import { StyleSheet, View } from "react-native";
import SliderRow from "../components/SliderRow";

const BottomSection = ({
  lengthSliderValue,
  widthSliderValue,
  grammageSliderValue,
  updateCustomSizeTag,
  updateCustomFormatTag,
}) => {
  const sliders = [
    {
      title: "Length",
      initialValue: lengthSliderValue,
    },
    {
      title: "Width",
      initialValue: widthSliderValue,
    },
    {
      title: "Grammage",
      initialValue: grammageSliderValue,
    },
  ];

  const updateSliderValue = (slider, value) => {
    console.log("Slider update called: ", slider, value);
    if (slider === sliders[0].title || slider === sliders[1].title) {
      updateCustomSizeTag(slider.toLowerCase(), value);
    } else if (slider === sliders[2].title) {
      updateCustomFormatTag(value);
    }
  };

  return (
    <View style={styles.container}>
      {sliders.map((slider) => (
        <SliderRow
          key={slider.initialValue}
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
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#3A4163",
  },
});

export default BottomSection;
