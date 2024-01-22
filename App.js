import { ImageBackground, StyleSheet, View } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#578585", "#C5D0D3"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/david-libeert.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.image}
      >
        <StartScreen />
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
