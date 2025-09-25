import { Button } from "@react-navigation/elements";
import { ImageComponent, StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput} from "react-native";
import { Link, router, Tabs, useRouter } from "expo-router";
import { Image }  from "expo-image";
import {AntDesign, Ionicons, MaterialIcons, Entypo, FontAwesome} from "@expo/vector-icons"
import Toast from 'react-native-toast-message';
import {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";


const ShopImage = require("./shoplocal.jpg");

const toastConfig = {
  error: (props: any) => (
    <View style={styles.customToast}>
      <Text style={styles.toastText}>{props.text1}</Text>
    </View>
  )
};

const pagina2 = () => {
  router.replace('./page2')
}
const pagina3 = () => {
  router.replace('./page3')
}

export default function App() {

  const [barras, setBarras] = useState(''); 
  const router = useRouter();

  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Erro ao listar comandas, Teste a Conexão na tela de Menu!',
      visibilityTime: 3000,
      autoHide: true,
    });
  };

  return(
    <View style={styles.container}>
      <TextInput 
        style={[styles.input, styles.inputPosition]} 
        placeholder="Codigo De Barras" 
        value={barras} 
        onChangeText={setBarras}
        keyboardType="numeric"
      />
      
      <Ionicons name="trash" size={33} color="blue" style={[styles.trash, styles.trashPosition]}/>
      <Ionicons name="barcode" size={33} color="gray" style={[styles.barcode, styles.barcodePosition]} />
      
      <Image source={ShopImage} style={styles.image}/>
      
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        onPress={showErrorToast}>
        <Text style={styles.buttonText}>Enviar Comanda</Text>
      </TouchableOpacity>
      
      <SafeAreaView edges={['bottom']} style={styles.safeArea}>
        <View style={styles.navBar}>
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => router.push('./home')}>
            <MaterialIcons name="shopping-basket" size={40} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navItem}
            onPress={(pagina2)}>
            <FontAwesome name="file-text" size={32} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navItem}
            onPress={pagina3}>
            <Entypo name="menu" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      
      <Toast config={toastConfig} />
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
  safeArea: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#311de9ff',
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
  customToast: {
    backgroundColor: '#666',
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    position: 'absolute',
    top: 615, 
    left: 20,
    right: 20,
    transform: [{ translateY: -50 }], 
  },
  toastText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  toastSubText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  
  trash: {
    position: 'absolute',
  },
  barcode: {
    position: 'absolute',
  },
  input: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 30,
    width: 315,
    position: 'absolute',
  },
  
  inputPosition: {
    top: 47,
    left: 30, 
  },
  trashPosition: {
    top: 56, 
    right: 28,
  },
  barcodePosition: {
    top: 56, 
    left: 300, 
  },
});