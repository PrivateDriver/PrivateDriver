import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './src/navigations/AuthNavigator';

export default function App() {
  return (    
      <NavigationContainer> 
        <AuthNavigator />
      </NavigationContainer>

  );
}


