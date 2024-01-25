import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

function GameOverScreen() {
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
      <View>
        <Text>
          I need <Text> X </Text> times to guess the number!
        </Text>
      </View>
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
});
