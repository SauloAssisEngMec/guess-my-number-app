import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import GuessNumber from "../components/GuessNumber";
import PrimaryButton from "../components/PrimaryButton";
// import { Ionicons } from "@expo/vector-icons/Ionicons";
import { FontAwesome6 } from "@expo/vector-icons";

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

function MainScreen({ userNumber, onGameOver }) {
  const initialGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [userNumber, currentGuess, onGameOver]);

  useEffect(() => {
    minValue = 1;
    maxValue = 100;
  }, []); // vai ser executado somente uma vez

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
    setGuessRounds((prevGuessRound) => [newRandomNumber, ...prevGuessRound]);
  }
  return (
    <View>
      <View style={styles.titleContainer}>
        <Title>Opponent's Guess</Title>
      </View>

      <GuessNumber>{currentGuess}</GuessNumber>

      <View style={styles.instructionContainer}>
        <Text style={styles.instruction}>Tell me, Higher or lower?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessNumberHandler.bind(this, "lower")}>
              <FontAwesome6 name="less-than" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton
              onPress={nextGuessNumberHandler.bind(this, "greater")}
            >
              <FontAwesome6 name="greater-than" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.logList}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <Text>{itemData.item}</Text>}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  valueContainer: {
    padding: 24,
  },
  titleContainer: {
    marginTop: 20,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    flex: 1,
    margin: 5,
  },
  instructionContainer: {
    backgroundColor: "#416D6D",
    alignItems: "center",
    margin: 20,
    borderRadius: 25,
  },
  instruction: {
    fontSize: 22,
    color: "white",
  },
  logList: {
    borderColor: "white",
    borderWidth: 1.5,
    padding: 5,
    marginVertical: 2,
    backgroundColor: "#8ab4b4",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 60,
    borderRadius: 25,
  },
});
