import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Tabs from './navigation/tabs';

// screens
// import Login from './screens/login/Login';
import Events from './screens/events/Events';
import Drivers from './screens/drivers/Drivers';
import Clients from './screens/clients/Clients';
import Vehicles from './screens/vehicles/Vehicles';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Login />
    <NavigationContainer>  
    {/* <Tabs /> */}
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Drivers" component={Drivers} />
        <Stack.Screen name="Clients" component={Clients} />
        <Stack.Screen name="Vehicles" component={Vehicles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

