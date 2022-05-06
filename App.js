import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// NAVIGATIONS
import { NavigationContainer } from '@react-navigation/native'

import StackScreen from './src/Routes';
import HomeScreen from './src/Screens/Home';

const App = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  )
}

export default App