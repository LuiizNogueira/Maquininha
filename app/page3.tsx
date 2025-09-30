import { Background, Button } from "@react-navigation/elements";
import { ImageComponent, StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput} from "react-native";
import { Link, router, Tabs, useRouter } from "expo-router";
import { Image }  from "expo-image";
import {AntDesign, MaterialIcons, Entypo, FontAwesome, Feather, Ionicons} from "@expo/vector-icons"
import Toast from 'react-native-toast-message';
import {useState} from "react";
import NavBar from "./components/navbar";


const ShopImage = require("./imgs/shoplocal.jpg");

const pagina2 = () => {
  router.replace('./page2')
}
const pagina3 = () => {
  router.replace('./page3')
}
const abert = () => {
  router.replace('./pagina3/abertura')
}
const refor = () => {
  router.replace('./pagina3/reforco')
}
const sang = () => {
  router.replace('./pagina3/sangria')
}
const gest = () => {
  router.replace('./pagina3/gestao')
}

export default function App() {

  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Essa parte do código não está pronto, tente novamente mais tarde',
      visibilityTime: 3000,
      autoHide: true,
    });
  };

  return(
    <View style={styles.container}>    
      <Image source={ShopImage} style={styles.image}/>

      <Text style={{fontWeight: 'bold',fontSize:20, top:-83, left: 30,marginTop: 10, }}>
        Empresa Teste
      </Text>
      <Text style={{marginTop: 10, color: '#666', fontSize: 14, top:-93, left: 6,}}>
        Usuário: caixa
      </Text>
      
            
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        onPress={abert}>
        <Text style={styles.buttonText}>Abertura de caixa</Text>
        <Feather name="arrow-right" size={33} style={styles.arrow}/>
        <FontAwesome name="money" size={33} color='orange' style={styles.boxcontent}/>
      </TouchableOpacity>


      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        onPress={refor}>
        <Text style={styles.buttonText}>Reforço de caixa</Text>
        <Feather name="arrow-right" size={33}  style={styles.arrow}/>
        <AntDesign name="plus-circle" size={33} color='orange' style={styles.boxcontent}/>
      </TouchableOpacity>

      
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        onPress={sang}>
        <Text style={styles.buttonText}>Sangria</Text>
        <Feather name="arrow-right" size={33}  style={styles.arrow}/>
        <AntDesign name="minus-circle" size={33} color='orange' style={styles.boxcontent}/>
      </TouchableOpacity>


      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        onPress={gest}>
        <Text style={styles.buttonText}>Gestão de Vendas</Text>
        <Feather name="arrow-right" size={33}  style={styles.arrow}/>
        <Ionicons name="list-circle" size={33} color='orange' style={styles.boxcontent}/>
      </TouchableOpacity>
      

    <View style={styles.navBar}>
              <NavBar />
        
  </View>
      
      <Text style={{ marginTop: 10, color: '#666', fontSize: 14, textAlign: 'center', left:90 , top:-13}}>
        IP: 192.168.0.l02
      </Text>

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
  safeArea: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: '#311de9ff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    position: 'absolute',
    top: 105,
    left: 50,
  },

  button: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 11,
    width: width * 0.8,
    marginBottom: 10,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
    color: 'black',
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
  
  arrow: {
    position: 'absolute',
    top: 22, 
    right: 15,
  },
 boxcontent: {
    position: 'absolute',
    top: 23, 
    left: 19,
 },

});