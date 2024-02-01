import { Text, View, StyleSheet, Alert } from "react-native";
import { generateRandomNumberBetween } from "../utils/helpers/generateRandomNumber";
import { useState } from "react";
import { Title } from "../components/UI/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";

interface GameScreenProps {
  userNumber: number;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber }: GameScreenProps) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrenGuess] = useState(initialGuess);

  function nextGuessHandler(direction: string) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie!", "You know that it is wrong!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrenGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title text="Opponent Guess" />
      <NumberContainer number={currentGuess} />
      <View>
        <Text>Higher or lower</Text>
        <View>
          <PrimaryButton
            buttonText="-"
            onPress={() => nextGuessHandler("lower")}
          />
          <PrimaryButton
            buttonText="+"
            onPress={() => nextGuessHandler("higher")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
