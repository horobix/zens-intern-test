import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

let Button = ({ title, color, onPress }) => {
  const styles = StyleSheet.create({
    button: {
      width: 150,
      paddingVertical: 12,
      paddingHorizontal: 0,

      backgroundColor: color,
    },
    text: {
      fontSize: 14,
      fontWeight: "600",
      textAlign: "center",

      color: "white",
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
