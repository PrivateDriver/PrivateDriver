import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Login from '../screens/auth/LoginScreen';
import Events from '../screens/home/events/EventScreen';
import Drivers from '../screens/home/drivers/DriverScreen';
import Clients from '../screens/home/clients/ClientScreen';
import Vehicles from '../screens/home/vehicles/VehicleScreen';
import Chat from '../screens/home/chat/ChatScreen';
import Map from '../screens/home/map/MapScreen';

const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (  
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Drivers" component={Drivers} />
        <Stack.Screen name="Clients" component={Clients} />
        <Stack.Screen name="Vehicles" component={Vehicles} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
  );
}