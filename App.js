import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navbar from "./components/Navbar";
import TopArea from "./components/TopArea";
import MiddleSection from "./components/MiddleSection";

import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    montserrat_bold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });
  // states
  const [numberOfSheets, setNumberOfSheets] = useState(1);

  //event handlers
  const handleNumOfPagesChange = (value) => {
    setNumberOfSheets(value);
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
        <MiddleSection />
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
