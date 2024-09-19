import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { TabBarVisibilityProvider } from './src/context/TabBarVisibilityContext';
import { Provider as PaperProvider } from 'react-native-paper';
import { PaperFormTheme } from './src/components/styles';
import { Provider } from 'react-redux'
import store from './src/store'

import AuthNavigator from './src/navigations/AuthNavigator';

const App: React.FC = () => {
  return (
    <PaperProvider theme={PaperFormTheme}>
      <Provider store={store}>
        <TabBarVisibilityProvider>
          <NavigationContainer>
            <AuthNavigator />
          </NavigationContainer>
        </TabBarVisibilityProvider>
      </Provider>
    </PaperProvider>
  );
};

export default App;