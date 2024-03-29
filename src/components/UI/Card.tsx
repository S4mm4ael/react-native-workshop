import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../global/constatnts";

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    width: "95%",
    justifyContent: "center",
    backgroundColor: colors.PrimeRed,
    alignItems: "center",
    marginHorizontal: 24,
    padding: 20,
    borderRadius: 8,
    //Android specific:
    elevation: 4,
    //IOs
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
