import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1 }}
                onPress={() => navigation.goBack()}
            >
                <Text>DetailsScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetailsScreen