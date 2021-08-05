import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
    grammage: 670,
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

  //event handlers
  const handleNumOfPagesChange = (value) => {
    setNumberOfSheets(value);
  };

  const updateSize = (sizeId) => {
    setSelectedSizeId(sizeId);
  };

  const updateFormat = (formatId) => {
    setSelectedFormatId(formatId);
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
          updateNumberOfSheets={handleNumOfPagesChange}
        />
        <MiddleSection
          pageSizes={sizes}
          pageFormats={formats}
          selectedSizeId={selectedSizeId}
          selectedFormatId={selectedFormatId}
          onSizeChange={updateSize}
          onFormatChange={updateFormat}
        />
        <BottomSection />
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
