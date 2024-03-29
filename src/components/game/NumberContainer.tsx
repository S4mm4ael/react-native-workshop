import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../global/constatnts";

interface NumberContainerProps {
  number: number;
}

export function NumberContainer({ number }: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{number}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.White,
    padding: deviceWidth < 450 ? 12 : 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.White,
    fontSize: 36,
    fontWeight: "bold",
  },
});
