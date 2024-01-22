import { StyleSheet, Text, View } from "react-native";

function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
      {/* Guess */}
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
    justifyContent: "center",
    alignItems: "center",
  },
});
