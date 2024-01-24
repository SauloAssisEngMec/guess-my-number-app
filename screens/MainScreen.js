import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import GuessNumber from "../components/GuessNumber";

function generateNumberBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

function MainScreen({ userNumber }) {
  const initialGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <GuessNumber>{currentGuess}</GuessNumber>
      <View>
        <Text>Tell me, Higher or lower?</Text>
        {/* + or - */}
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
});
