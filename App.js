import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './screens-nav/navigation/Stacks';
// import Tabs from './screens-nav/navigation/Tabs';

// screens
import LoginScreen from './screens-nav/screens/login/LoginScreen';

export default function App() {
  return (
    // <LoginScreen />
    
      <NavigationContainer> 
        <Stack /> 
      </NavigationContainer>

  );
}


