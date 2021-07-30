import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import TopArea from "./components/TopArea";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar headerText="Paper Calculator" />
      <TopArea />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
