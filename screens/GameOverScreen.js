import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ userNumber, roundsNumber, onStartNewGame }) {
  return (
    <View style={styles.container}>
      <Title>I GUESS THE NUMBER, DRINK IT!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./../assets/images/gameover.png")}
          resizeMode="cover"
        />
      </View>
      <View style={styles.logsContainer}>
        <Text style={styles.text}>
          I need <Text> {roundsNumber} </Text> rounds to guess the number{" "}
          <Text>{userNumber}</Text>!
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 3,
    overflow: "hidden",
    marginTop: 25,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  logsContainer: {
    backgroundColor: "#1a1e1e",
    padding: 11,
    margin: 7,
    borderRadius: 25,
    color: "white",
  },
  text: {
    color: "white",
    opacity: 0.8,
    fontSize: 16,
  },
});
