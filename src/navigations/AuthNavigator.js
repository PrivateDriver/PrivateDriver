import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Login, Home, Events, Drivers, Clients, Vehicles} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen 
          name="Home" 
          component={BottomTabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Events" 
          component={Events} 
          />
        <Stack.Screen 
          name="Drivers" 
          component={Drivers} 
          />
        <Stack.Screen 
          name="Clients" 
          component={Clients} 
          />
        <Stack.Screen 
          name="Vehicles" 
          component={Vehicles} 
          />
    </Stack.Navigator>
  );
}

