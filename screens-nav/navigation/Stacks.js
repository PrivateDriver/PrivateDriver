import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Login from '../screens/login/LoginScreen';
import Events from '../screens/events/EventScreen';
import Drivers from '../screens/drivers/DriverScreen';
import Clients from '../screens/clients/ClientScreen';
import Vehicles from '../screens/vehicles/VehicleScreen';
import Chat from '../screens/chat/ChatScreen';
import Map from '../screens/map/MapScreen';

const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (  
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Drivers" component={Drivers} />
        <Stack.Screen name="Clients" component={Clients} />
        <Stack.Screen name="Vehicles" component={Vehicles} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
  );
}