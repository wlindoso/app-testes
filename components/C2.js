import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export const C2 = () => {
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [result, setResult] = useState(0);

  const calcularIMC = () => {
    const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    setResult(isNaN(imc) ? "Entrada inválida" : imc.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Altura</Text>
      <TextInput
        style={styles.input}
        autoFocus
        keyboardType="numeric"
        value={altura}
        onChangeText={(text) => setAltura(text)}
        placeholder="Ex.: 1.81"
      />

      <Text style={styles.text}>Peso</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={peso}
        onChangeText={(text) => setPeso(text)}
        placeholder="Ex.: 83.0"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={calcularIMC}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.textResultado}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
    backgroundColor: "lightblue",
    borderRadius: 30,
    padding: 16,
    margin: 10,
  },
  input: {
    width: "90%",
    margin: 12,
    padding: 10,
    fontSize: 18,
    // borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  botao: {
    width: "90%",
    margin: 12,
    padding: 10,
    backgroundColor: "#2196f3",
    borderRadius: 8,
  },
  textButton: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  textResultado: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2196f3",
  },
});
