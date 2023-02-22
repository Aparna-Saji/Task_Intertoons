import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import AppStackNavigator from './app/AppNavigator'

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App

