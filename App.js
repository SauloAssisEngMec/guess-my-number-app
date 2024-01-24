import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import MainScreen from "./screens/MainScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }
  function gameOverHandler() {
    setGameOver(true);
  }

  let screen = <StartScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <MainScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen />;
  }
  return (
    <LinearGradient colors={["#578585", "#C5D0D3"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/david-libeert.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  image: {
    opacity: 0.7,
  },
});
