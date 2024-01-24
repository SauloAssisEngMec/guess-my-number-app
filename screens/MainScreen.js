import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import GuessNumber from "../components/GuessNumber";
import PrimaryButton from "../components/PrimaryButton";

function generateNumberBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minValue = 1;
let maxValue = 100;

function MainScreen({ userNumber }) {
  const initialGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessNumberHandler(result) {
    if (
      (result === "lower" && currentGuess < userNumber) ||
      (result === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie, guys", "Its wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);

      return;
    }
    if (result === "lower") {
      maxValue = currentGuess;
    } else {
      minValue = currentGuess + 1;
    }
    const newRandomNumber = generateNumberBetween(
      minValue,
      maxValue,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <GuessNumber>{currentGuess}</GuessNumber>
      <View>
        <Text>Tell me, Higher or lower?</Text>
        <View style={styles.minosPlusButton}>
          <PrimaryButton onPress={nextGuessNumberHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessNumberHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>
        <Text> Log rounds</Text>
      </View>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  minosPlusButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
