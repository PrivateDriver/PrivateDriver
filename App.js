import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stacks';
// import Tabs from './src/navigation/Tabs';

// screens
// import LoginScreen from './src/screens/auth/LoginScreen';

export default function App() {
  return (
    // <LoginScreen />
    
      <NavigationContainer> 
        <SafeAreaView style={{
          flex: 1,
          justifyContent: 'center',
          }} >
          <Stack /> 
          {/* <Tabs /> */}
        </SafeAreaView>
      </NavigationContainer>

  );
}


