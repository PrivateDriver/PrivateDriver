import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Events from '../screens/events/Events';
import Drivers from '../screens/drivers/Drivers';
import Clients from '../screens/clients/Clients';
import Vehicles from '../screens/vehicles/Vehicles';
import Chat from '../screens/chat/Chat';
import Map from '../screens/map/Map';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Drivers" component={Drivers} />
      <Tab.Screen name="Clients" component={Clients} />
      <Tab.Screen name="Vehicles" component={Vehicles} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Map" component={Map} />        
    </Tab.Navigator>
  );
}

export default Tabs;