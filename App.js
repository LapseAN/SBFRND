import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SigninScreen from "./Screens/SigninScreen/SigninScreen";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <SigninScreen></SigninScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
