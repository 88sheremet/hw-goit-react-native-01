import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationForm from './Screens/RegistrationScreen';
import * as Font from 'expo-font';

import { useState } from 'react';




export default function App() {
 
  return (
    
    <View style={styles.container}>
      <RegistrationForm/>
      {/* <Text>First project</Text>
      <StatusBar style="auto" /> */}
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
