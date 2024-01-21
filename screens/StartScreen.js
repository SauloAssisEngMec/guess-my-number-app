import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: "#662549",
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
