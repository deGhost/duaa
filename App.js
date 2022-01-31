import React , {useState,useEffect}from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedbackBase, TextInput, Dimensions} from 'react-native'
import Login from './Login'
import Register from './Register'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App= () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App
