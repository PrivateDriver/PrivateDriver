import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stacks';
import Tabs from './src/navigation/Tabs';
// import Login from './screens/login/Login';

export default function App() {
  return (
   <> 
    <NavigationContainer> 
      {/* <Login /> */}
      <Stack /> 

    </NavigationContainer>
    
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    </>
  );
}


