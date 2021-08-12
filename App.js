import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navbar from "./components/Navbar";
import TopArea from "./components/TopArea";
import MiddleSection from "./components/MiddleSection";
import BottomSection from "./components/BottomSection";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const sizes = [
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
  {
    id: "a8",
    title: "Custom",
    length: 320,
    width: 281,
  },
];

const formats = [
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
    grammage: 370,
  },
  {
    id: "07",
    title: "Custom",
    grammage: 10,
  },
];

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    montserrat_bold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  // states
  const [numberOfSheets, setNumberOfSheets] = useState(1);
  const [selectedSizeId, setSelectedSizeId] = useState("a4");
  const [selectedFormatId, setSelectedFormatId] = useState("01");
  const [totalWeight, setTotalWeight] = useState(4.99);
  const [lengthSliderValue, setLengthSliderValue] = useState(297);
  const [widthSliderValue, setWidthSliderValue] = useState(210);
  const [grammageSliderValue, setGrammageSliderValue] = useState(10);

  useEffect(() => {
    setTotalWeight(
      (
        numberOfSheets *
        (lengthSliderValue / 1000) *
        (widthSliderValue / 1000) *
        grammageSliderValue
      ).toFixed(2)
    );
  }, [
    numberOfSheets,
    lengthSliderValue,
    widthSliderValue,
    grammageSliderValue,
  ]);

  //event handlers
  const handleNumOfPagesChange = (value) => {
    setNumberOfSheets(value);
  };

  const updateSize = (sizeId) => {
    setSelectedSizeId(sizeId);
    setLengthSliderValue(sizes.find((s) => s.id === sizeId).length);
    setWidthSliderValue(sizes.find((s) => s.id === sizeId).width);
  };

  const updateFormat = (formatId) => {
    setSelectedFormatId(formatId);
    setGrammageSliderValue(formats.find((f) => f.id === formatId).grammage);
  };

  const updateCustomSizeTag = (property, value) => {
    if (property === "width") {
      setWidthSliderValue(value);
    } else if (property === "length") {
      setLengthSliderValue(value);
    }
    // custom tag will be selected
    setSelectedSizeId("a8");
  };

  const updateCustomFormatTag = (value) => {
    setGrammageSliderValue(value);
    // custom tag will be selected
    setSelectedFormatId("07");
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Navbar headerText="Paper Calculator" />
        <TopArea
          numberOfSheets={numberOfSheets}
          weight={totalWeight}
          onNumberOfSheetsChanged={handleNumOfPagesChange}
        />
        <MiddleSection
          pageSizes={sizes}
          pageFormats={formats}
          selectedSizeId={selectedSizeId}
          selectedFormatId={selectedFormatId}
          onSizeChange={updateSize}
          onFormatChange={updateFormat}
        />
        <BottomSection
          lengthSliderValue={lengthSliderValue}
          widthSliderValue={widthSliderValue}
          grammageSliderValue={grammageSliderValue}
          updateCustomSizeTag={updateCustomSizeTag}
          updateCustomFormatTag={updateCustomFormatTag}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
