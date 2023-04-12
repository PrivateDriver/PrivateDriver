import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './src/navigations/AuthNavigator'
import BottomTabNavigator from './src/navigations/BottomTabNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
