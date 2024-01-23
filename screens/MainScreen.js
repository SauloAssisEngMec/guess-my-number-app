import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

function MainScreen() {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
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
    padding: 24,
  },
});
