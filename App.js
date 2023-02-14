import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import Stack from './src/navigations/Stacks';
import AuthNavigator from './src/navigations/AuthNavigator';
// import Tabs from './src/navigation/Tabs';

// screens

export default function App() {
  return (
    // <LoginScreen />
    
      <NavigationContainer> 
        <SafeAreaView style={{
          flex: 1,
          justifyContent: 'center',
          }} >
          {/* <Stack /> */}
          <AuthNavigator /> 
          {/* <Tabs /> */}
        </SafeAreaView>
      </NavigationContainer>

  );
}


