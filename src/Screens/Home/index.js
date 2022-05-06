import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation}) => {
    return (
        <View>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1 }}
                onPress={() => navigation.navigate("Details")}
            >
                <Text>HomeScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen