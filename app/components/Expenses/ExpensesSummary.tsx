import {View, Text} from "react-native";
import React from "react";

interface IProps {
  expenses: any;
  periodName: string;
}

const ExpensesSummary = ({expenses, periodName}: IProps) => {
  const expensesSum = expenses.reduce((sum: number, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;