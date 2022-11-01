import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Login from '../screens/login/Login';
import Events from '../screens/events/Events';
import Drivers from '../screens/drivers/Drivers';
import Clients from '../screens/clients/Clients';
import Vehicles from '../screens/vehicles/Vehicles';
import Chat from '../screens/chat/Chat';
import Map from '../screens/map/Map';

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