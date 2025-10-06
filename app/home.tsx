import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Toast from 'react-native-toast-message';
import NavBar from "./components/navbar";


const ShopImage = require("./imgs/shoplocal.jpg");

const add = () => {
  router.replace('./grid/add')
}

const pagina2 = () => {
  router.replace('./page2')
}
const pagina3 = () => {
  router.replace('./page3')
}

export default function App() {

  const [barras, setBarras] = useState(''); 
  const router = useRouter();

  const [buttonY, setButtonY] = useState(0);


  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Código De Barras"
          value={barras}
          onChangeText={setBarras}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.iconWrapper}>
          <Ionicons name="barcode" size={33} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Ionicons name="trash" size={33} color="blue" />
        </TouchableOpacity>
      </View>

      <Image source={ShopImage} style={styles.image}/>
      
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        onPress={add}
        onLayout={(event) => {
          const { y } = event.nativeEvent.layout;
          setButtonY(y);
        }}
      >
        <Text style={styles.buttonText}>Enviar Comanda</Text>
      </TouchableOpacity>
      
        <View style={styles.navBar}>
          <NavBar />
        </View>
      
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

   navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#311de9ff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    height: 90,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  image: {
    width: 210,
    height: 210,
    borderRadius: 200,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 11,
    width: width * 0.8,
    height: 63,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2E7D32',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    opacity: 0.3,
    marginBottom: -20, 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  trash: {
    position: 'absolute',
    top: 56, 
    right: 28,
  },
  barcode: {
    position: 'absolute',
    top: 56, 
    left: 300, 
    
  },
    inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center',  
    width: '90%',        
    position: 'absolute',
    top: 47,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10, 
    backgroundColor: 'white', 
  },
  input: {
    flex:1,
    height: 55,
  },
  iconWrapper: {
    paddingHorizontal: 5, 
  },

});