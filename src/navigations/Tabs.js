import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Events from '../screens/home/events/EventScreen';
import Drivers from '../screens/home/drivers/DriverScreen';
import Clients from '../screens/home/clients/ClientScreen';
import Vehicles from '../screens/home/vehicles/VehicleScreen';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Drivers" component={Drivers} />
      <Tab.Screen name="Clients" component={Clients} />
      <Tab.Screen name="Vehicles" component={Vehicles} />       
    </Tab.Navigator>
  );
}

export default Tabs;