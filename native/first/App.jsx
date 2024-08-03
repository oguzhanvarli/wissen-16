import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import CounterSample from './src/samples/CounterSample'
import FlexSample from './src/samples/FlexSample'
import FlexSample2 from './src/samples/FlexSample2'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CharacterDetail from './src/screens/CharacterDetail'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import axios from 'axios'
import Episodes from './src/screens/Episodes'
import Login from './src/screens/Login'


const Stack = createNativeStackNavigator()

const App = () => {

  axios.defaults.baseURL = "https://rickandmortyapi.com/api"

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='CharacterDetail' component={CharacterDetail} />
          <Stack.Screen name='Episode' component={Episodes} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App



