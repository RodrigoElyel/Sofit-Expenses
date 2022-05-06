import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'

const Screen = ({children, style }) => {
    return (
       <SafeAreaView style={[styles.screen, style]}>
           <View>{children}</View>
       </SafeAreaView>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
})