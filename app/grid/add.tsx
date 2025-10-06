import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [comanda, setComanda] = useState("");
  const [produto, setProduto] = useState("");

  function handleSalvar() {
    if (!username.trim() || !comanda.trim() || !produto.trim()) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    Alert.alert(
      "Comanda salva",
      `Usuário: ${username}\nComanda: ${comanda}\nProduto: ${produto}`
    );
    setUsername("");
    setComanda("");
    setProduto("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.voltar} onPress={() => router.replace("../home")}>
          <Feather name="arrow-left" size={32} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Adicionar Comanda</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Adicione sua Comanda</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#aaa"
          />

          <TextInput
            style={styles.input}
            placeholder="Número da Comanda"
            value={comanda}
            onChangeText={setComanda}
            placeholderTextColor="#aaa"
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Nome do Produto"
            value={produto}
            onChangeText={setProduto}
            placeholderTextColor="#aaa"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#311de9",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 16,
    elevation: 4,
  },
  voltar: {
    marginRight: 12,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
    color: "#222",
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: 48,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 14,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  button: {
    backgroundColor: "#311de9",
    width: "90%",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
