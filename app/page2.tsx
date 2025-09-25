import { Background, Button } from "@react-navigation/elements";
import { ImageComponent, StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput} from "react-native";
import { Link, router, Tabs, useRouter } from "expo-router";
import { Image }  from "expo-image";
import {AntDesign, MaterialIcons, Entypo, FontAwesome, Feather, Ionicons} from "@expo/vector-icons"
import Toast from 'react-native-toast-message';
import {useState} from "react";


const Gato = require("./MILK KITTY!!.jpg");

const pagina2 = () => {
  router.replace('./page2')
}
const pagina3 = () => {
  router.replace('./page3')
}

export default function App() {


  return(
    <View style={styles.container}>    
      
      <Image source={Gato} style={styles.image}/>

      <Text style={styles.text}> AINDA NAO ESTA PRONTO </Text>


      <View style={styles.navBar}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => router.push('./home')}>
          <MaterialIcons name="shopping-basket" size={40} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={pagina2}>
          <FontAwesome name="file-text" size={32} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={pagina3}>
          <Entypo name="menu" size={40} color="white" />
        </TouchableOpacity>
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

  text:{
    textAlign: 'center',
    marginTop: 10,
    color: 'red', 
    fontSize: 40,
    top:160,
    fontWeight:'bold',
},
  
});
