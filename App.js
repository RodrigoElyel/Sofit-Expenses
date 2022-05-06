import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// NAVIGATIONS
import { NavigationContainer } from '@react-navigation/native'

// Alerts
import FlashMessage from "react-native-flash-message";

import StackScreen from './src/Routes';
import HomeScreen from './src/Screens/Home';

const App = () => {
  return (
    <NavigationContainer>
      <StackScreen />
      <FlashMessage position="bottom" />
    </NavigationContainer>
  )
}

export default App