import { StyleSheet, Text, View, Dimensions } from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";
import NavBar from "./components/navbar";

const Gato = require("./imgs/MILK KITTY!!.jpg");

export default function App() {
  return (
    <View style={styles.container}>    
      <Image source={Gato} style={styles.image}/>
      <Text style={styles.text}>AINDA NAO ESTA PRONTO</Text>
      <NavBar />
    </View>  
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingBottom: 70,
  },
  image: {
    width: 380,
    height: 450,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    color: 'red', 
    fontSize: 40,
    top: 160,
    fontWeight: 'bold',
  },
});