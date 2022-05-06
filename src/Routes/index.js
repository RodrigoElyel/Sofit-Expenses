import { View, Text } from 'react-native'
import React from 'react'

// NAVIGATIONS
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import HomeScreen from '../Screens/Home'
import DetailsScreen from '../Screens/Details'

const Stack = createStackNavigator();

const StackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default StackScreen

