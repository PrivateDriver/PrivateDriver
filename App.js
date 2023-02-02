import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stacks';
// import Tabs from './screens-nav/navigation/Tabs';

// screens
import LoginScreen from './src/screens/login/LoginScreen';

export default function App() {
  return (
    // <LoginScreen />
    
      <NavigationContainer> 
        <Stack /> 
      </NavigationContainer>

  );
}


