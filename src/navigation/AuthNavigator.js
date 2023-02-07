import React from "react";
import { createStackNavigator } from "@react-navigation/native-stack";

import Events from '../screens/EventScreen';
import Drivers from '../screens/DriverScreen';
import Clients from '../screens/ClientScreen';
import Vehicles from '../screens/VehicleScreen';
import Chat from '../screens/ChatScreen';
import Map from '../screens/MapScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Drivers" component={Drivers} />
        <Stack.Screen name="Clients" component={Clients} />
        <Stack.Screen name="Vehicles" component={Vehicles} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
  );
}

export { AuthNavigator };