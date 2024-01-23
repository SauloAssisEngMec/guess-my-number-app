import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3c3f3f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#3c3f3f",
    padding: 10,
  },
});
