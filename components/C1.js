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

export default C1 = () => {
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [resultado, setResultado] = useState(0);

  const calcular = () => {
    const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    setResultado(isNaN(imc) ? "Entrada inválida" : imc.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Altura</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: 1.81"
        keyboardType="numeric"
        value={altura}
        onChangeText={(value) => setAltura(value)}
      />
      <Text style={styles.text}>Peso</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: 83.0"
        keyboardType="numeric"
        value={peso}
        onChangeText={(value) => setPeso(value)}
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={calcular}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.textResultado}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightpink",
    borderRadius: 30,
    padding: 16,
    margin: 10,
    // Adicionando sombra para Android
    elevation: 5,
    // Adicionando sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
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
  botao: {
    width: "90%",
    margin: 12,
    padding: 10,
    backgroundColor: "#2196f3",
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
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
    color: "#f35599",
  },
});
