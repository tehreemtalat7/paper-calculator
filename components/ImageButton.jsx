import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const ImageButton = ({ ImageStyle, ImageSource, containerStyle, onClick }) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onClick}>
      <Image style={{ ...styles.image, ...ImageStyle }} source={ImageSource} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
  },
});

export default ImageButton;
