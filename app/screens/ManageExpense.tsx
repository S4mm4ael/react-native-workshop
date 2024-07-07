import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React, {useContext} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {IconButton} from "../components/UI/IconButton";
import {Colors} from "../constants";
import Button from "../components/UI/Button";
import {ExpensesContext} from "../stores/expenses-context";
import {ExpenseForm} from "../components/ManageExpenses";

export const ManageExpense = () => {
  const expensesContext = useContext(ExpensesContext);
  const route = useRoute();
  const {goBack, setOptions} = useNavigation();

  const id = (route.params as {id?: string})?.id;
  const isEdit = id !== undefined;

  React.useEffect(() => {
    setOptions({
      title: isEdit ? `Edit Expense ${id}` : "Add Expense",
    });
  }, [isEdit, setOptions]);

  const deleteButtonHandler = () => {
    expensesContext.deleteExpense(id);
    goBack();
  };

  const cancelButtonHandler = () => {
    goBack();
  };

  const confirmButtonHandler = () => {
    if (isEdit) {
      expensesContext.updateExpense(id, {
        id: id,
        description: "Updated",
        amount: 100,
        date: new Date(),
      });
    } else {
      expensesContext.addExpense({
        id: new Date().toString() + Math.random().toString(),
        description: "New",
        amount: 100,
        date: new Date(),
      });
    }
    goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ExpenseForm />
        <View style={styles.buttonsContainer}>
          <Button title="Cancel" onPress={cancelButtonHandler} />
          <Button
            title={isEdit ? "Update" : "Add"}
            onPress={confirmButtonHandler}
            color={Colors.green}
          />
          {isEdit ? (
            <IconButton
              icon="trash"
              color="red"
              onPress={deleteButtonHandler}
            />
          ) : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
});
