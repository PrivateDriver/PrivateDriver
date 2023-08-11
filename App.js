import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { PaperFormTheme } from './src/components/styles'

import AuthNavigator from './src/navigations/AuthNavigator'

export default function App() {
  return (
    <PaperProvider theme={PaperFormTheme}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}
