import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import C1 from "./components/C1";
import { C2 } from "./components/C2";

export default function App() {
  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Calculadora de IMC</Text>
          <C1 />
          <C2 />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#ff9",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 40,
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
