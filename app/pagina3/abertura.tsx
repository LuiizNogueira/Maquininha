import { Background, Button } from "@react-navigation/elements";
import { ImageComponent, StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput} from "react-native";
import { Link, router, Tabs, useRouter } from "expo-router";
import { Image }  from "expo-image";
import {AntDesign, MaterialIcons, Entypo, FontAwesome, Feather, Ionicons} from "@expo/vector-icons"
import Toast from 'react-native-toast-message';
import {useState} from "react";


const Gato = require("../imgs/MILK KITTY!!.jpg");

const pagina3 = () => {
  router.replace('../page3')
}

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Gato} style={styles.image} />

      <Text style={styles.text}> ABERTURA DE CAIXA </Text>

      <View style={styles.header}>
        <TouchableOpacity style={styles.voltar} onPress={pagina3}>
          <Feather name="arrow-left" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    paddingBottom: 70,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#311de9ff",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    position: "absolute",
    top: 0,
    height: 90,
  },

  voltar: {
    padding: 10,
    top: 15, 
  },

  image: {
    width: 380,
    height: 450,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    position: "absolute",
  },

  text: {
    textAlign: "center",
    marginTop: 10,
    color: "red",
    fontSize: 40,
    top: 160,
    fontWeight: "bold",
  },
});
