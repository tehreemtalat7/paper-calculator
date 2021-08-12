import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Slider } from "react-native-elements";
import Colors from "../constants/colors";
import Dimens from "../constants/dimens";

const SliderRow = ({ sliderTitle, sliderValue, unit, updateSliderValue }) => {
  const [lengthDisplay, setLengthDisplay] = useState(sliderValue);

  useEffect(() => {
    setLengthDisplay(sliderValue);
  }, [sliderValue]);

  return (
    <View style={styles.container}>
      <View style={styles.rowHead}>
        <Text style={styles.title}>{sliderTitle}</Text>
        <View style={styles.value}>
          <TextInput
            style={styles.badge}
            keyboardType="number-pad"
            textBreakStrategy="simple"
            value={"" + lengthDisplay}
            onChangeText={(length) => {
              setLengthDisplay(length);
            }}
            onSubmitEditing={(event) =>
              updateSliderValue(sliderTitle, parseInt(event.nativeEvent.text))
            }
          />
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontSize: Dimens.fonts.small,
              fontFamily: "Montserrat_400Regular",
            }}
          >
            {unit}
          </Text>
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
        maximumTrackTintColor={Colors.secondaryLight}
        thumbTintColor={Colors.primaryDark}
        onValueChange={(length) => setLengthDisplay(length)}
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
    padding: Dimens.lessPadding,
  },
  title: {
    color: "white",
    fontSize: Dimens.fonts.normal,
    fontFamily: "montserrat_bold",
  },
  rowHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  value: {
    height: 30,
    padding: 3,
    borderRadius: Dimens.borderRadius,
    justifyContent: "center",
    backgroundColor: Colors.secondaryDark,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  badge: {
    color: "white",
    fontSize: Dimens.fonts.semiNormal,
    fontFamily: "Montserrat_400Regular",
    alignSelf: "flex-end",
  },
});

export default SliderRow;
