import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, FontAwesome, Entypo } from "@expo/vector-icons";
import { router } from 'expo-router';

interface NavBarProps {
  onHomePress?: () => void;
  onPage2Press?: () => void;
  onPage3Press?: () => void;
}

export default function NavBar({ 
  onHomePress, 
  onPage2Press, 
  onPage3Press 
}: NavBarProps) {
  
  const defaultHomePress = () => router.push('./home');
  const defaultPage2Press = () => router.replace('./page2');
  const defaultPage3Press = () => router.replace('./page3');

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={onHomePress || defaultHomePress}>
          <MaterialIcons name="shopping-basket" size={40} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={onPage2Press || defaultPage2Press}>
          <FontAwesome name="file-text" size={32} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={onPage3Press || defaultPage3Press}>
          <Entypo name="menu" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});