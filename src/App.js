import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import RegistrationForm from './Screens/RegistrationScreen';
import * as Font from 'expo-font';

import { useState } from 'react';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';




export default function App() {
 
  return (
    
    <View style={styles.container}>
      <RegistrationScreen/>
    
      {/* <LoginScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
