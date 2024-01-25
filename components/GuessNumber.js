import { StyleSheet, Text, View } from "react-native";

function GuessNumber({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default GuessNumber;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "#3c3f3f",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    margin: 20,
    backgroundColor: "#8ab4b4",
    opacity: 0.8,
    shadowColor: "#3c3f3f",
    shadowOpacity: 0.6,
  },

  numberText: {
    fontSize: 35,
    color: "white",
    opacity: 1,
    shadowColor: "#3c3f3f",
    shadowOpacity: 0.6,
  },
});
