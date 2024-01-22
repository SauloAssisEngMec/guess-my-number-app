import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartScreen({ onPickedNumber }) {
  const [enteredValue, setEnteredValue] = useState("");

  function valueInputHandler(enteredValue) {
    setEnteredValue(enteredValue);
  }

  function verifyInputHandler() {
    const chosenValue = parseInt(enteredValue);

    if (isNaN(chosenValue) || chosenValue <= 0 || chosenValue > 99) {
      Alert.alert(
        "Invalid number!",
        "Value has to be a number between 1 and 99",
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickedNumber(chosenValue);
  }

  function resetInputHandler() {
    setEnteredValue("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredValue}
        onChangeText={valueInputHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={verifyInputHandler}>Confirm</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default StartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    backgroundColor: "#416D6D",
    marginHorizontal: 22,
    padding: 16,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    height: 50,
    width: 60,
    fontSize: 30,
    color: "#fff",
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 2,
  },
  button: {
    flex: 1,
  },
});
