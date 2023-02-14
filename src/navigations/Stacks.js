import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import {Login, Events, Drivers, Clients, Vehicles} from '../screens';

const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (  
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Drivers" component={Drivers} />
        <Stack.Screen name="Clients" component={Clients} />
        <Stack.Screen name="Vehicles" component={Vehicles} />
      </Stack.Navigator>
  );
}