import {View, Text, StyleSheet} from "react-native";
import React from "react";
import {Input} from ".";

export const ExpenseForm = () => {
  const amountChangeHandler = (text: string) => {
    console.log(text);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>ExpenseForm</Text>
      <Input
        label="Amount"
        textInputConfig={{
          placeholder: "Enter amount",
          keyboardType: "decimal-pad",
          onChangeText: (amount) => amountChangeHandler(amount),
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "Year-Month-Day",
          maxLength: 10,
          onChangeText: (date) => {
            console.log(date);
          },
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          placeholder: "Enter description",
          maxLength: 10,
          onChangeText: (date) => {
            console.log(date);
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});