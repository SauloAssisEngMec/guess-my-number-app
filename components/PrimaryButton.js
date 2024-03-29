import { Text, View, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}> {children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutContainer: {
    borderRadius: 25,
    backgroundColor: "#fff",
    margin: 4,
  },
  buttonInnerContainer: {
    borderRadius: 25,
    backgroundColor: "#C86F43",
    paddingVertical: 8,
    paddingHorizontal: 15,
    shadowColor: "black",
    shadowOpacity: 0.4,
  },
  pressed: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
  },
});
