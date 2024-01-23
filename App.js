import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import MainScreen from "./screens/MainScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <MainScreen />;
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
