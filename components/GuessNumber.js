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
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    fontSize: 35,
    color: "#3c3f3f",
  },
});
